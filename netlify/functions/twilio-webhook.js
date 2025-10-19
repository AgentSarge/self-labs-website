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
    // Parse the form submission data
    const formData = JSON.parse(event.body);
    
    // Extract form fields
    const formName = formData.form_name || 'Unknown Form';
    const name = formData.name || 'No name provided';
    const email = formData.email || 'No email provided';
    const phone = formData.phone || 'No phone provided';
    const message = formData.message || 'No message provided';
    const projectType = formData['project-type'] || 'Not specified';
    
    // Create SMS message
    const smsMessage = `New form submission from ${formName}:
Name: ${name}
Email: ${email}
Phone: ${phone}
Project: ${projectType}
Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`;

    // Send SMS via Twilio
    await sendSMS(smsMessage);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'SMS notification sent successfully' 
      })
    };
    
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
  
  if (!accountSid || !authToken || !fromNumber || !toNumber) {
    throw new Error('Missing Twilio credentials. Please set environment variables.');
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
