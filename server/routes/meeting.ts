import { Router } from "express";
import sgMail from "@sendgrid/mail";
import nodemailer from "nodemailer";

const router = Router();

// Email configuration - supporting multiple providers
const EMAIL_CONFIG = {
  // Business contact email for live deployment
  testEmail: "saziz01B@gmail.com",
  businessEmail: "saziz01B@gmail.com",
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

// Personal email domains to block
const personalEmailDomains = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
  'live.com', 'msn.com', 'icloud.com', 'me.com', 'mac.com',
  'protonmail.com', 'tutanota.com', 'yandex.com', 'mail.com',
  'zoho.com', 'fastmail.com', 'hushmail.com', 'guerrillamail.com',
  'mailinator.com', '10minutemail.com', 'tempmail.org', 'sharklasers.com'
];

// Enhanced business email validation
async function validateBusinessEmail(email: string): Promise<{isValid: boolean, message: string}> {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: "Please enter a valid email address" };
  }

  // Extract domain
  const domain = email.split('@')[1].toLowerCase();
  
  // Check against personal email domains
  if (personalEmailDomains.includes(domain)) {
    return { 
      isValid: false, 
      message: "Please use your business email address. Personal email addresses (Gmail, Yahoo, etc.) are not accepted for business inquiries." 
    };
  }

  // Basic domain validation (must have at least one dot and valid TLD)
  const domainParts = domain.split('.');
  if (domainParts.length < 2 || domainParts[domainParts.length - 1].length < 2) {
    return { isValid: false, message: "Please enter a valid business domain" };
  }

  return { isValid: true, message: "Valid business email" };
}

// Meeting confirmation email template
function generateMeetingConfirmationEmail(meetingDetails: any) {
  return {
    to: meetingDetails.email,
    from: EMAIL_CONFIG.testEmail,
    subject: `Meeting Confirmation - ${EMAIL_CONFIG.companyName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #01411c 0%, #028a37 100%); color: white; padding: 40px 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Meeting Confirmed!</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">ITNOA Cybersecurity Consultation</p>
        </div>
        
        <div style="padding: 30px;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #01411c; margin: 0 0 20px 0; font-size: 20px;">Hi ${meetingDetails.fullName},</h2>
            <p style="color: #333; line-height: 1.6; margin: 0 0 15px 0;">
              Your meeting has been scheduled successfully! We'll contact you at the specified time to discuss your cybersecurity needs.
            </p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600; width: 30%;">Date:</td>
                <td style="padding: 8px 0; color: #333; font-size: 16px;"><strong>${meetingDetails.preferredDate}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600;">Time:</td>
                <td style="padding: 8px 0; color: #333; font-size: 16px;"><strong>${meetingDetails.preferredTime} ${meetingDetails.timeZone}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600;">Type:</td>
                <td style="padding: 8px 0; color: #333;">${meetingDetails.meetingType}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Discussion Topics</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #01411c;">
              <p style="margin: 0; color: #333; line-height: 1.6;">${meetingDetails.agenda}</p>
            </div>
          </div>
          
          <div style="background: #01411c; color: white; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="margin: 0 0 10px 0; font-size: 18px;">Questions?</h3>
            <p style="margin: 0; font-size: 18px; font-weight: bold;">📞 248 795 0202</p>
          </div>
        </div>
        
        <div style="background: #01411c; color: white; padding: 20px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">Thank you for choosing ITNOA Cybersecurity</p>
          <p style="margin: 5px 0 0 0; opacity: 0.8;">Your meeting confirmation</p>
        </div>
      </div>
    `
  };
}

// Business notification email for meetings
function generateBusinessNotificationEmail(meetingDetails: any) {
  return {
    to: EMAIL_CONFIG.testEmail,
    from: EMAIL_CONFIG.testEmail,
    subject: `🔔 New Meeting Request - ${meetingDetails.fullName} from ${meetingDetails.company}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #01411c 0%, #028a37 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; font-weight: bold;">New Meeting Request</h1>
          <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">ITNOA Cybersecurity</p>
        </div>
        
        <div style="padding: 25px;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Client Information</h3>
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
            <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Meeting Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600; width: 30%;">Date:</td>
                <td style="padding: 8px 0; color: #333; font-size: 16px;"><strong>${meetingDetails.preferredDate}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600;">Time:</td>
                <td style="padding: 8px 0; color: #333; font-size: 16px;"><strong>${meetingDetails.preferredTime} ${meetingDetails.timeZone}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600;">Type:</td>
                <td style="padding: 8px 0; color: #333;">${meetingDetails.meetingType}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #01411c; margin: 0 0 15px 0; font-size: 18px;">Agenda</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #01411c;">
              <p style="margin: 0; color: #333; line-height: 1.6;">${meetingDetails.agenda}</p>
            </div>
          </div>
          
          <div style="background: #01411c; color: white; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="margin: 0 0 15px 0; font-size: 18px;">Quick Actions</h3>
            <a href="mailto:${meetingDetails.email}?subject=Meeting Confirmation - ITNOA Cybersecurity&body=Dear ${meetingDetails.fullName},%0D%0A%0D%0AThank you for scheduling a meeting..." 
               style="background: white; color: #01411c; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
              📧 Email Client
            </a>
          </div>
        </div>
        
        <div style="background: #01411c; color: white; padding: 20px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">Meeting notification from ITNOA Cybersecurity</p>
          <p style="margin: 5px 0 0 0; opacity: 0.8;">Generated automatically by the website meeting scheduler</p>
        </div>
      </div>
    `
  };
}

// Contact form confirmation email
function generateContactConfirmationEmail(contactDetails: any) {
  return {
    to: contactDetails.email,
    from: EMAIL_CONFIG.testEmail,
    subject: `Message Received - ${contactDetails.subject} | ITNOA Cybersecurity`,
    html: `
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
    `
  };
}

// Contact form business notification email
function generateContactBusinessEmail(contactDetails: any) {
  return {
    to: EMAIL_CONFIG.testEmail,
    from: EMAIL_CONFIG.testEmail,
    subject: `🔔 New Contact: ${contactDetails.subject} - ${contactDetails.firstName} ${contactDetails.lastName}`,
    html: `
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
    `
  };
}

// Client consultation confirmation email
function generateClientConfirmationEmail(clientDetails: any) {
  return {
    to: clientDetails.email,
    from: EMAIL_CONFIG.testEmail,
    subject: `Welcome to ITNOA - Free Consultation Scheduled | ITNOA Cybersecurity`,
    html: `
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
    `
  };
}

// Client business notification email
function generateClientBusinessEmail(clientDetails: any) {
  return {
    to: EMAIL_CONFIG.testEmail,
    from: EMAIL_CONFIG.testEmail,
    subject: `🎯 New Client Application: ${clientDetails.organization} - ${clientDetails.name}`,
    html: `
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
    `
  };
}

// Email sending functions
async function sendMeetingEmails(meetingDetails: any): Promise<{success: boolean, emailsSent: number, error?: string}> {
  try {
    const clientEmail = generateMeetingConfirmationEmail(meetingDetails);
    const businessEmail = generateBusinessNotificationEmail(meetingDetails);
    
    let emailsSent = 0;
    
    if (emailService === "sendgrid") {
      console.log("Sending emails via SendGrid...");
      await sgMail.send(clientEmail);
      await sgMail.send(businessEmail);
      emailsSent = 2;
      console.log("✅ SendGrid emails sent successfully");
    } else if (emailService === "smtp") {
      console.log("Sending emails via SMTP...");
      
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
      console.log(`✅ Business notification sent to: ${businessEmail.to}`);
      
      emailsSent = 2;
    } else {
      console.log("⚠️ No email service configured for meetings");
      emailsSent = 0;
    }
    
    return { success: true, emailsSent };
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return { success: false, emailsSent: 0, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

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

// API Routes
router.post("/schedule-meeting", async (req, res) => {
  try {
    const { firstName, lastName, fullName, email, company, jobTitle, preferredDate, preferredTime, timeZone, meetingType, agenda } = req.body;
    
    // Handle both fullName and firstName/lastName formats
    let finalFirstName = firstName;
    let finalLastName = lastName;
    
    if (!firstName && !lastName && fullName) {
      const nameParts = fullName.split(' ');
      finalFirstName = nameParts[0] || '';
      finalLastName = nameParts.slice(1).join(' ') || '';
    }
    
    // Validate required fields
    if (!finalFirstName || !email || !company || !preferredDate || !preferredTime || !timeZone || !meetingType || !agenda) {
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
    
    // Prepare meeting details
    const meetingDetails = {
      fullName: `${finalFirstName} ${finalLastName}`.trim(),
      firstName: finalFirstName,
      lastName: finalLastName,
      email,
      company,
      jobTitle,
      preferredDate,
      preferredTime,
      timeZone,
      meetingType,
      agenda
    };
    
    console.log(`Processing meeting request for ${finalFirstName} ${finalLastName}`);
    
    // Send emails
    const emailResult = await sendMeetingEmails(meetingDetails);
    
    if (emailResult.success) {
      res.json({
        success: true,
        message: "Meeting scheduled successfully. You will receive a confirmation email shortly.",
        emailsSent: emailResult.emailsSent
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Meeting scheduled but email notification failed. We'll still contact you at the scheduled time.",
        error: emailResult.error
      });
    }
    
  } catch (error) {
    console.error("Meeting scheduling error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while scheduling your meeting"
    });
  }
});

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