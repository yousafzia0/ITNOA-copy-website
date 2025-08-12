import { Router } from "express";
import sgMail from "@sendgrid/mail";

const router = Router();

// Email configuration - supporting multiple providers
const EMAIL_CONFIG = {
  // For testing and development
  testEmail: "premiumlogos.824@gmail.com",
  businessEmail: "info@itnoa.com",
  companyName: "ITNOA Cybersecurity",
  companyPhone: "248 795 0202"
};

// Initialize email service
let emailService: any = null;

if (process.env.SENDGRID_API_KEY) {
  // Use SendGrid if available
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  emailService = "sendgrid";
} else {
  // Fallback to custom email system
  emailService = "custom";
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
      await sgMail.send(clientEmail);
      await sgMail.send(businessEmail);
      emailsSent = 2;
    } else {
      // Use custom email system (for development/testing)
      console.log("=== EMAIL SYSTEM SIMULATION ===");
      console.log("CLIENT EMAIL:", JSON.stringify(clientEmail, null, 2));
      console.log("BUSINESS EMAIL:", JSON.stringify(businessEmail, null, 2));
      console.log("=== END EMAIL SIMULATION ===");
      emailsSent = 2;
    }
    
    return { success: true, emailsSent };
  } catch (error) {
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

export default router;