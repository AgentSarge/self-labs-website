const https = require('https');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Log the raw event body for debugging
    console.log('Raw event body:', event.body);
    console.log('Event headers:', event.headers);
    
    // Parse the form submission data
    const formData = JSON.parse(event.body);
    
    // Extract form fields
    const formName = formData.form_name || 'Unknown Form';
    const name = formData.name || 'No name provided';
    const email = formData.email || 'No email provided';
    const phone = formData.phone || 'No phone provided';
    const message = formData.message || 'No message provided';
    const projectType = formData['project-type'] || 'Not specified';
    const budget = formData.budget || 'Not specified';
    const timeline = formData.timeline || 'Not specified';
    const features = formData['features[]'] || 'None selected';
    
    // Log all form data for debugging
    console.log('Received form data:', JSON.stringify(formData, null, 2));
    
    // Create SMS message
    const smsMessage = `New form submission from ${formName}:
Name: ${name}
Email: ${email}
Phone: ${phone}
Project: ${projectType}
Budget: ${budget}
Timeline: ${timeline}
Features: ${features}
Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`;

    // Send SMS via Twilio
    try {
      await sendSMS(smsMessage);
      
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          message: 'SMS notification sent successfully' 
        })
      };
    } catch (smsError) {
      console.error('SMS sending failed:', smsError);
      
      // Return success even if SMS fails, so form submission still works
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          message: 'Form received but SMS notification failed',
          error: smsError.message
        })
      };
    }
    
  } catch (error) {
    console.error('Error processing webhook:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      })
    };
  }
};

async function sendSMS(message) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;
  const toNumber = process.env.YOUR_PHONE_NUMBER;
  
  console.log('Environment variables check:');
  console.log('TWILIO_ACCOUNT_SID:', accountSid ? 'SET' : 'MISSING');
  console.log('TWILIO_AUTH_TOKEN:', authToken ? 'SET' : 'MISSING');
  console.log('TWILIO_PHONE_NUMBER:', fromNumber ? 'SET' : 'MISSING');
  console.log('YOUR_PHONE_NUMBER:', toNumber ? 'SET' : 'MISSING');
  
  if (!accountSid || !authToken || !fromNumber || !toNumber) {
    throw new Error(`Missing Twilio credentials. Account SID: ${accountSid ? 'SET' : 'MISSING'}, Auth Token: ${authToken ? 'SET' : 'MISSING'}, From: ${fromNumber ? 'SET' : 'MISSING'}, To: ${toNumber ? 'SET' : 'MISSING'}`);
  }
  
  const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
  
  const postData = new URLSearchParams({
    From: fromNumber,
    To: toNumber,
    Body: message
  }).toString();
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64')
    }
  };
  
  return new Promise((resolve, reject) => {
    const req = https.request(twilioUrl, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Twilio API error: ${res.statusCode} - ${data}`));
        }
      });
    });
    
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}
