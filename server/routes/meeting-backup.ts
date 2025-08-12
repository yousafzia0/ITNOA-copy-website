import { Router } from "express";
import sgMail from "@sendgrid/mail";
import nodemailer from "nodemailer";

const router = Router();

// Email configuration - supporting multiple providers
const EMAIL_CONFIG = {
  // For testing and development
  testEmail: "premiumlogos.824@gmail.com",
  businessEmail: "info@itnoa.com",
  companyName: "ITNOA Cybersecurity",
  companyPhone: "248 795 0202",
  // Gmail SMTP settings for fallback
  smtpHost: "smtp.gmail.com",
  smtpPort: 587
};

// Initialize email service
let emailService: any = null;
let transporter: any = null;

if (process.env.SENDGRID_API_KEY) {
  // Use SendGrid if available
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  emailService = "sendgrid";
  console.log("Email service: SendGrid configured");
} else {
  // Use SMTP as fallback (works with Gmail, Outlook, etc.)
  emailService = "smtp";
  
  // Create SMTP transporter
  transporter = nodemailer.createTransport({
    host: EMAIL_CONFIG.smtpHost,
    port: EMAIL_CONFIG.smtpPort,
    secure: false, // true for 465, false for other ports
    auth: {
      user: EMAIL_CONFIG.testEmail, // Your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD || "fallback-password" // App password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  
  console.log("Email service: SMTP configured with Gmail");
}

interface MeetingFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  preferredDate: string;
  preferredTime: string;
  timeZone: string;
  meetingType: string;
  agenda: string;
}

router.post("/schedule-meeting", async (req, res) => {
  try {
    const meetingData: MeetingFormData = req.body;

    // Validate required fields
    if (!meetingData.firstName || !meetingData.lastName || !meetingData.email || !meetingData.company) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Enhanced email validation
    const emailValidation = await validateBusinessEmail(meetingData.email);
    if (!emailValidation.isValid) {
      return res.status(400).json({ error: emailValidation.message });
    }

    // Format meeting details
    const meetingDetails = {
      fullName: `${meetingData.firstName} ${meetingData.lastName}`,
      email: meetingData.email,
      company: meetingData.company,
      jobTitle: meetingData.jobTitle || 'Not specified',
      preferredDate: meetingData.preferredDate || 'Not specified',
      preferredTime: meetingData.preferredTime || 'Not specified',
      timeZone: meetingData.timeZone || 'EST',
      meetingType: meetingData.meetingType || 'consultation',
      agenda: meetingData.agenda || 'Not specified'
    };

    // Send emails using our custom system
    try {
      const emailResults = await sendMeetingEmails(meetingDetails);
      
      if (emailResults.success) {
        console.log(`Meeting scheduled successfully for ${meetingDetails.fullName}`);
        console.log(`Emails sent to: ${meetingDetails.email} and ${EMAIL_CONFIG.testEmail}`);
        
        res.json({ 
          success: true, 
          message: "Meeting scheduled successfully. You will receive a confirmation email shortly.",
          emailsSent: emailResults.emailsSent
        });
      } else {
        throw new Error(emailResults.error);
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      res.json({ 
        success: true, 
        message: "Meeting scheduled successfully, but there was an issue sending confirmation emails. We will contact you directly.",
        emailError: emailError instanceof Error ? emailError.message : "Unknown email error"
      });
    }
  } catch (error) {
    console.error("Meeting scheduling error:", error);
    res.status(500).json({ error: "Failed to schedule meeting" });
  }
});

// Enhanced email validation function
async function validateBusinessEmail(email: string): Promise<{isValid: boolean, message: string}> {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: "Invalid email format" };
  }

  const emailDomain = email.split('@')[1]?.toLowerCase();
  if (!emailDomain) {
    return { isValid: false, message: "Invalid email domain" };
  }

  // Check against personal email providers
  const personalDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 
    'icloud.com', 'protonmail.com', 'mail.com', 'live.com', 'msn.com',
    'ymail.com', 'rocketmail.com', 'aim.com', 'me.com', 'mac.com'
  ];
  
  // Allow test email for development
  if (email === EMAIL_CONFIG.testEmail) {
    return { isValid: true, message: "Test email accepted" };
  }
  
  if (personalDomains.includes(emailDomain)) {
    return { isValid: false, message: "Please use a business email address, not a personal email provider" };
  }

  // Basic domain validation (check if it has proper business domain structure)
  const domainParts = emailDomain.split('.');
  if (domainParts.length < 2) {
    return { isValid: false, message: "Invalid business domain" };
  }

  return { isValid: true, message: "Valid business email" };
}

// Professional email sending system
async function sendMeetingEmails(meetingDetails: any): Promise<{success: boolean, emailsSent: number, error?: string}> {
  try {
    const clientEmail = generateClientConfirmationEmail(meetingDetails);
    const businessEmail = generateBusinessNotificationEmail(meetingDetails);
    
    let emailsSent = 0;
    
    if (emailService === "sendgrid") {
      // Use SendGrid for production
      console.log("Sending emails via SendGrid...");
      await sgMail.send(clientEmail);
      await sgMail.send(businessEmail);
      emailsSent = 2;
      console.log("✅ SendGrid emails sent successfully");
    } else if (emailService === "smtp") {
      // Use SMTP for real email sending
      console.log("Sending emails via SMTP...");
      
      // Convert SendGrid format to Nodemailer format
      const clientEmailSMTP = {
        from: `"${EMAIL_CONFIG.companyName}" <${EMAIL_CONFIG.testEmail}>`,
        to: clientEmail.to,
        subject: clientEmail.subject,
        html: clientEmail.html
      };
      
      const businessEmailSMTP = {
        from: `"${EMAIL_CONFIG.companyName}" <${EMAIL_CONFIG.testEmail}>`,
        to: businessEmail.to,
        subject: businessEmail.subject,
        html: businessEmail.html
      };
      
      // Send both emails
      await transporter.sendMail(clientEmailSMTP);
      console.log(`✅ Client confirmation sent to: ${clientEmail.to}`);
      
      await transporter.sendMail(businessEmailSMTP);
      console.log(`✅ Business notification sent to: ${businessEmail.to}`);
      
      emailsSent = 2;
    } else {
      // Fallback: Log emails for debugging
      console.log("=== EMAIL SYSTEM FALLBACK (NO REAL EMAILS) ===");
      console.log("⚠️ No email service configured - emails not sent");
      console.log("CLIENT EMAIL TO:", clientEmail.to);
      console.log("BUSINESS EMAIL TO:", businessEmail.to);
      console.log("=== END EMAIL FALLBACK ===");
      emailsSent = 0;
    }
    
    return { success: true, emailsSent };
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return { success: false, emailsSent: 0, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// Generate professional client confirmation email
function generateClientConfirmationEmail(meetingDetails: any) {
  return {
    to: meetingDetails.email,
    from: EMAIL_CONFIG.businessEmail,
    subject: `Meeting Confirmation - ${EMAIL_CONFIG.companyName}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #01411c 0%, #21965f 100%); color: white; padding: 40px 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: 2px;">ITNOA</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Professional Cybersecurity Services</p>
        </div>
        
        <div style="padding: 40px 30px; background: #f8f9fa;">
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #01411c; margin: 0 0 20px 0; font-size: 24px;">Meeting Confirmed ✓</h2>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
              Dear <strong>${meetingDetails.fullName}</strong>,
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
              Thank you for scheduling a cybersecurity consultation with ITNOA. Your meeting request has been confirmed with the following details:
            </p>
            
            <div style="background: #f8f9fa; border-left: 4px solid #01411c; padding: 25px; margin: 25px 0; border-radius: 0 8px 8px 0;">
              <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Meeting Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: 600;">Date:</td>
                  <td style="padding: 8px 0; color: #333;">${meetingDetails.preferredDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: 600;">Time:</td>
                  <td style="padding: 8px 0; color: #333;">${meetingDetails.preferredTime} ${meetingDetails.timeZone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: 600;">Type:</td>
                  <td style="padding: 8px 0; color: #333;">${meetingDetails.meetingType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: 600;">Company:</td>
                  <td style="padding: 8px 0; color: #333;">${meetingDetails.company}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: #e8f5e8; border: 1px solid #01411c; padding: 20px; margin: 25px 0; border-radius: 8px;">
              <h3 style="color: #01411c; margin: 0 0 10px 0; font-size: 16px;">What's Next?</h3>
              <p style="color: #333; margin: 0; font-size: 14px; line-height: 1.5;">
                Our cybersecurity experts will contact you within <strong>24 hours</strong> to confirm the meeting details and provide dial-in information.
              </p>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 25px 0;">
              In the meantime, feel free to explore our comprehensive cybersecurity services and resources on our website.
            </p>
          </div>
        </div>
        
        <div style="background: #01411c; color: white; padding: 30px; text-align: center;">
          <h3 style="margin: 0 0 15px 0; font-size: 18px;">Questions?</h3>
          <p style="margin: 0; font-size: 16px;">
            Call us at <strong>${EMAIL_CONFIG.companyPhone}</strong> or reply to this email
          </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666;">
          <p style="margin: 0;">© 2024 ${EMAIL_CONFIG.companyName}. All rights reserved.</p>
          <p style="margin: 5px 0 0 0;">Professional Cybersecurity & Compliance Solutions</p>
        </div>
      </div>
    `
  };
}

// Generate business notification email
function generateBusinessNotificationEmail(meetingDetails: any) {
  return {
    to: EMAIL_CONFIG.testEmail, // Using test email for now
    from: EMAIL_CONFIG.businessEmail,
    subject: `🔔 New Meeting Request - ${meetingDetails.fullName} from ${meetingDetails.company}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #01411c 0%, #21965f 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">New Meeting Request</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">${EMAIL_CONFIG.companyName}</p>
        </div>
        
        <div style="background: #fff3cd; border: 2px solid #ffc107; padding: 15px 20px; margin: 0;">
          <p style="margin: 0; color: #856404; font-weight: 600; text-align: center;">
            ⚡ Action Required: Contact client within 24 hours
          </p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #01411c; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #01411c; padding-bottom: 10px;">Client Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: 600; width: 30%;">Name:</td>
                <td style="padding: 10px 0; color: #333; font-size: 16px;"><strong>${meetingDetails.fullName}</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: 600;">Email:</td>
                <td style="padding: 10px 0; color: #333;"><a href="mailto:${meetingDetails.email}" style="color: #01411c; text-decoration: none;">${meetingDetails.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: 600;">Company:</td>
                <td style="padding: 10px 0; color: #333; font-size: 16px;"><strong>${meetingDetails.company}</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: 600;">Job Title:</td>
                <td style="padding: 10px 0; color: #333;">${meetingDetails.jobTitle}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Meeting Preferences</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600; width: 30%;">Preferred Date:</td>
                <td style="padding: 8px 0; color: #333; font-size: 16px;"><strong>${meetingDetails.preferredDate}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600;">Preferred Time:</td>
                <td style="padding: 8px 0; color: #333; font-size: 16px;"><strong>${meetingDetails.preferredTime} ${meetingDetails.timeZone}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600;">Meeting Type:</td>
                <td style="padding: 8px 0; color: #333;">${meetingDetails.meetingType}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Discussion Topics & Agenda</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #01411c;">
              <p style="margin: 0; color: #333; line-height: 1.6;">${meetingDetails.agenda}</p>
            </div>
          </div>
          
          <div style="background: #01411c; color: white; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="margin: 0 0 15px 0; font-size: 18px;">Quick Actions</h3>
            <p style="margin: 0 0 15px 0; font-size: 14px;">Contact the client to confirm meeting details</p>
            <a href="mailto:${meetingDetails.email}?subject=Meeting Confirmation - ${EMAIL_CONFIG.companyName}&body=Dear ${meetingDetails.fullName},%0D%0A%0D%0AThank you for scheduling a meeting with us..." 
               style="background: white; color: #01411c; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 10px; display: inline-block;">
              📧 Email Client
            </a>
          </div>
        </div>
        
        <div style="background: #01411c; color: white; padding: 20px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">Meeting notification from ${EMAIL_CONFIG.companyName}</p>
          <p style="margin: 5px 0 0 0; opacity: 0.8;">Generated automatically by the website meeting scheduler</p>
        </div>
      </div>
    `
  };
}

// Generate contact form confirmation email
function generateContactConfirmationEmail(contactDetails: any) {
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
      <div style="background: linear-gradient(135deg, #01411c 0%, #028a37 100%); color: white; padding: 40px 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Message Received!</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Thank you for contacting ITNOA Cybersecurity</p>
      </div>
      
      <div style="padding: 30px;">
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #01411c; margin: 0 0 20px 0; font-size: 20px;">Hi ${contactDetails.firstName},</h2>
          <p style="color: #333; line-height: 1.6; margin: 0 0 15px 0;">
            We've received your message and appreciate you reaching out to us. Our team will review your inquiry and respond within 4 hours during business hours.
          </p>
          <p style="color: #333; line-height: 1.6; margin: 0;">
            <strong>Subject:</strong> ${contactDetails.subject}
          </p>
        </div>
        
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">What Happens Next?</h3>
          <ul style="color: #333; line-height: 1.8; margin: 0; padding-left: 20px;">
            <li>Our cybersecurity experts will review your message</li>
            <li>We'll respond with relevant information and next steps</li>
            <li>If needed, we'll schedule a free consultation call</li>
            <li>Emergency issues are handled within 2-4 hours</li>
          </ul>
        </div>
        
        <div style="background: #01411c; color: white; padding: 20px; border-radius: 8px; text-align: center;">
          <h3 style="margin: 0 0 10px 0; font-size: 18px;">Need Immediate Help?</h3>
          <p style="margin: 0 0 15px 0; font-size: 14px;">For urgent security matters, call our emergency hotline</p>
          <p style="margin: 0; font-size: 18px; font-weight: bold;">📞 248 795 0202</p>
        </div>
      </div>
      
      <div style="background: #01411c; color: white; padding: 20px; text-align: center; font-size: 14px;">
        <p style="margin: 0;">Thank you for choosing ITNOA Cybersecurity</p>
        <p style="margin: 5px 0 0 0; opacity: 0.8;">Your message confirmation from our website contact form</p>
      </div>
    </div>
  `;

  return {
    to: contactDetails.email,
    from: EMAIL_CONFIG.testEmail,
    subject: `Message Received - ${contactDetails.subject} | ITNOA Cybersecurity`,
    html: emailHtml
  };
}

// Generate contact form business notification email
function generateContactBusinessEmail(contactDetails: any) {
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
      <div style="background: linear-gradient(135deg, #01411c 0%, #028a37 100%); color: white; padding: 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px; font-weight: bold;">🔔 New Contact Form Message</h1>
        <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">From ITNOA website contact form</p>
      </div>
      
      <div style="padding: 25px;">
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Contact Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: 600; width: 30%;">Name:</td>
              <td style="padding: 10px 0; color: #333; font-size: 16px;"><strong>${contactDetails.firstName} ${contactDetails.lastName}</strong></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: 600;">Email:</td>
              <td style="padding: 10px 0; color: #333;"><a href="mailto:${contactDetails.email}" style="color: #01411c; text-decoration: none;">${contactDetails.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600;">Subject:</td>
              <td style="padding: 8px 0; color: #333; font-size: 16px;"><strong>${contactDetails.subject}</strong></td>
            </tr>
          </table>
        </div>
        
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Message Content</h3>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #01411c;">
            <p style="margin: 0; color: #333; line-height: 1.6;">${contactDetails.message}</p>
          </div>
        </div>
        
        <div style="background: #01411c; color: white; padding: 20px; border-radius: 8px; text-align: center;">
          <h3 style="margin: 0 0 15px 0; font-size: 18px;">Quick Actions</h3>
          <a href="mailto:${contactDetails.email}?subject=Re: ${contactDetails.subject}&body=Dear ${contactDetails.firstName},%0D%0A%0D%0AThank you for contacting ITNOA Cybersecurity..." 
             style="background: white; color: #01411c; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
            📧 Reply to ${contactDetails.firstName}
          </a>
        </div>
      </div>
      
      <div style="background: #01411c; color: white; padding: 20px; text-align: center; font-size: 14px;">
        <p style="margin: 0;">Contact form notification from ITNOA Cybersecurity</p>
        <p style="margin: 5px 0 0 0; opacity: 0.8;">Generated automatically by the website contact form</p>
      </div>
    </div>
  `;

  return {
    to: EMAIL_CONFIG.testEmail,
    from: EMAIL_CONFIG.testEmail,
    subject: `🔔 New Contact: ${contactDetails.subject} - ${contactDetails.firstName} ${contactDetails.lastName}`,
    html: emailHtml
  };
}

// Generate client consultation confirmation email
function generateClientConfirmationEmail(clientDetails: any) {
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
      <div style="background: linear-gradient(135deg, #01411c 0%, #028a37 100%); color: white; padding: 40px 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Welcome to ITNOA!</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Your consultation request has been received</p>
      </div>
      
      <div style="padding: 30px;">
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #01411c; margin: 0 0 20px 0; font-size: 20px;">Hi ${clientDetails.name},</h2>
          <p style="color: #333; line-height: 1.6; margin: 0 0 15px 0;">
            Thank you for your interest in becoming an ITNOA client! We're excited to help strengthen your organization's cybersecurity posture.
          </p>
          <p style="color: #333; line-height: 1.6; margin: 0;">
            Our team will review your requirements and contact you within 24 hours to schedule your free consultation.
          </p>
        </div>
        
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Your Request Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600; width: 30%;">Organization:</td>
              <td style="padding: 8px 0; color: #333; font-size: 16px;"><strong>${clientDetails.organization}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600;">Industry:</td>
              <td style="padding: 8px 0; color: #333;">${clientDetails.industry || 'Not specified'}</td>
            </tr>
          </table>
        </div>
        
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">What Happens Next?</h3>
          <ul style="color: #333; line-height: 1.8; margin: 0; padding-left: 20px;">
            <li>We'll contact you within 24 hours to schedule your <strong>free consultation</strong></li>
            <li>Discuss your specific cybersecurity needs and challenges</li>
            <li>Provide a customized assessment of your current security posture</li>
            <li>Develop a tailored cybersecurity roadmap for your organization</li>
          </ul>
        </div>
        
        <div style="background: #01411c; color: white; padding: 20px; border-radius: 8px; text-align: center;">
          <h3 style="margin: 0 0 10px 0; font-size: 18px;">Questions?</h3>
          <p style="margin: 0 0 15px 0; font-size: 14px;">Feel free to reach out if you have any immediate questions</p>
          <p style="margin: 0; font-size: 18px; font-weight: bold;">📞 248 795 0202</p>
        </div>
      </div>
      
      <div style="background: #01411c; color: white; padding: 20px; text-align: center; font-size: 14px;">
        <p style="margin: 0;">Welcome to ITNOA Cybersecurity</p>
        <p style="margin: 5px 0 0 0; opacity: 0.8;">Your consultation request confirmation</p>
      </div>
    </div>
  `;

  return {
    to: clientDetails.email,
    from: EMAIL_CONFIG.testEmail,
    subject: `Welcome to ITNOA - Free Consultation Scheduled | ITNOA Cybersecurity`,
    html: emailHtml
  };
}

// Generate client business notification email
function generateClientBusinessEmail(clientDetails: any) {
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
      <div style="background: linear-gradient(135deg, #01411c 0%, #028a37 100%); color: white; padding: 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px; font-weight: bold;">🎯 New Client Application</h1>
        <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">From ITNOA "Become Client" form</p>
      </div>
      
      <div style="padding: 25px;">
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Potential Client Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: 600; width: 30%;">Name:</td>
              <td style="padding: 10px 0; color: #333; font-size: 16px;"><strong>${clientDetails.name}</strong></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: 600;">Email:</td>
              <td style="padding: 10px 0; color: #333;"><a href="mailto:${clientDetails.email}" style="color: #01411c; text-decoration: none;">${clientDetails.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: 600;">Organization:</td>
              <td style="padding: 10px 0; color: #333; font-size: 16px;"><strong>${clientDetails.organization}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600;">Industry:</td>
              <td style="padding: 8px 0; color: #333;">${clientDetails.industry || 'Not specified'}</td>
            </tr>
          </table>
        </div>
        
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Cybersecurity Needs</h3>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #01411c;">
            <p style="margin: 0; color: #333; line-height: 1.6;">${clientDetails.message}</p>
          </div>
        </div>
        
        <div style="background: #01411c; color: white; padding: 20px; border-radius: 8px; text-align: center;">
          <h3 style="margin: 0 0 15px 0; font-size: 18px;">Action Required</h3>
          <p style="margin: 0 0 15px 0; font-size: 14px;">Contact within 24 hours for free consultation</p>
          <a href="mailto:${clientDetails.email}?subject=ITNOA Free Consultation - ${clientDetails.organization}&body=Dear ${clientDetails.name},%0D%0A%0D%0AThank you for your interest in ITNOA Cybersecurity services..." 
             style="background: white; color: #01411c; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
            📞 Schedule Consultation
          </a>
        </div>
      </div>
      
      <div style="background: #01411c; color: white; padding: 20px; text-align: center; font-size: 14px;">
        <p style="margin: 0;">Client application from ITNOA Cybersecurity</p>
        <p style="margin: 5px 0 0 0; opacity: 0.8;">Generated automatically by the website client form</p>
      </div>
    </div>
  `;

  return {
    to: EMAIL_CONFIG.testEmail,
    from: EMAIL_CONFIG.testEmail,
    subject: `🎯 New Client Application: ${clientDetails.organization} - ${clientDetails.name}`,
    html: emailHtml
  };
}

// Email sending functions for contact form
async function sendContactEmails(contactDetails: any): Promise<{success: boolean, emailsSent: number, error?: string}> {
  try {
    const clientEmail = generateContactConfirmationEmail(contactDetails);
    const businessEmail = generateContactBusinessEmail(contactDetails);
    
    let emailsSent = 0;
    
    if (emailService === "sendgrid") {
      console.log("Sending contact emails via SendGrid...");
      await sgMail.send(clientEmail);
      await sgMail.send(businessEmail);
      emailsSent = 2;
      console.log("✅ SendGrid contact emails sent successfully");
    } else if (emailService === "smtp") {
      console.log("Sending contact emails via SMTP...");
      
      const clientEmailSMTP = {
        from: `"${EMAIL_CONFIG.companyName}" <${EMAIL_CONFIG.testEmail}>`,
        to: clientEmail.to,
        subject: clientEmail.subject,
        html: clientEmail.html
      };
      
      const businessEmailSMTP = {
        from: `"${EMAIL_CONFIG.companyName}" <${EMAIL_CONFIG.testEmail}>`,
        to: businessEmail.to,
        subject: businessEmail.subject,
        html: businessEmail.html
      };
      
      await transporter.sendMail(clientEmailSMTP);
      console.log(`✅ Contact confirmation sent to: ${clientEmail.to}`);
      
      await transporter.sendMail(businessEmailSMTP);
      console.log(`✅ Contact notification sent to: ${businessEmail.to}`);
      
      emailsSent = 2;
    } else {
      console.log("⚠️ No email service configured for contact form");
      emailsSent = 0;
    }
    
    return { success: true, emailsSent };
  } catch (error) {
    console.error("❌ Contact email sending error:", error);
    return { success: false, emailsSent: 0, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// Email sending functions for client applications
async function sendClientEmails(clientDetails: any): Promise<{success: boolean, emailsSent: number, error?: string}> {
  try {
    const clientEmail = generateClientConfirmationEmail(clientDetails);
    const businessEmail = generateClientBusinessEmail(clientDetails);
    
    let emailsSent = 0;
    
    if (emailService === "sendgrid") {
      console.log("Sending client emails via SendGrid...");
      await sgMail.send(clientEmail);
      await sgMail.send(businessEmail);
      emailsSent = 2;
      console.log("✅ SendGrid client emails sent successfully");
    } else if (emailService === "smtp") {
      console.log("Sending client emails via SMTP...");
      
      const clientEmailSMTP = {
        from: `"${EMAIL_CONFIG.companyName}" <${EMAIL_CONFIG.testEmail}>`,
        to: clientEmail.to,
        subject: clientEmail.subject,
        html: clientEmail.html
      };
      
      const businessEmailSMTP = {
        from: `"${EMAIL_CONFIG.companyName}" <${EMAIL_CONFIG.testEmail}>`,
        to: businessEmail.to,
        subject: businessEmail.subject,
        html: businessEmail.html
      };
      
      await transporter.sendMail(clientEmailSMTP);
      console.log(`✅ Client confirmation sent to: ${clientEmail.to}`);
      
      await transporter.sendMail(businessEmailSMTP);
      console.log(`✅ Client notification sent to: ${businessEmail.to}`);
      
      emailsSent = 2;
    } else {
      console.log("⚠️ No email service configured for client application");
      emailsSent = 0;
    }
    
    return { success: true, emailsSent };
  } catch (error) {
    console.error("❌ Client email sending error:", error);
    return { success: false, emailsSent: 0, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// Contact form API endpoint
router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }
    
    // Validate email format and business domain
    const emailValidation = await validateBusinessEmail(email);
    if (!emailValidation.isValid) {
      return res.status(400).json({
        success: false,
        message: emailValidation.message
      });
    }
    
    // Prepare contact details
    const contactDetails = {
      firstName,
      lastName,
      email,
      subject,
      message
    };
    
    console.log(`Processing contact form for ${firstName} ${lastName}`);
    
    // Send emails
    const emailResult = await sendContactEmails(contactDetails);
    
    if (emailResult.success) {
      res.json({
        success: true,
        message: "Message sent successfully. We'll respond within 4 hours.",
        emailsSent: emailResult.emailsSent
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Message saved but email notification failed. We'll still respond to your inquiry.",
        error: emailResult.error
      });
    }
    
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your message"
    });
  }
});

// Client application API endpoint
router.post("/become-client", async (req, res) => {
  try {
    const { name, email, organization, industry, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !organization || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, organization, and message are required"
      });
    }
    
    // Validate email format and business domain
    const emailValidation = await validateBusinessEmail(email);
    if (!emailValidation.isValid) {
      return res.status(400).json({
        success: false,
        message: emailValidation.message
      });
    }
    
    // Prepare client details
    const clientDetails = {
      name,
      email,
      organization,
      industry,
      message
    };
    
    console.log(`Processing client application for ${name} from ${organization}`);
    
    // Send emails
    const emailResult = await sendClientEmails(clientDetails);
    
    if (emailResult.success) {
      res.json({
        success: true,
        message: "Application submitted successfully. We'll contact you within 24 hours.",
        emailsSent: emailResult.emailsSent
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Application saved but email notification failed. We'll still contact you.",
        error: emailResult.error
      });
    }
    
  } catch (error) {
    console.error("Client application error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your application"
    });
  }
});

export default router;