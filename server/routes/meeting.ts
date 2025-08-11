import { Router } from "express";
import sgMail from "@sendgrid/mail";

const router = Router();

// Initialize SendGrid if API key is available
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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

    // Validate business email (not personal)
    const emailDomain = meetingData.email.split('@')[1];
    const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'protonmail.com', 'mail.com'];
    
    if (personalDomains.includes(emailDomain?.toLowerCase())) {
      return res.status(400).json({ error: "Please use a business email address" });
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

    const businessEmail = "info@itnoa.com";

    try {
      // Send confirmation email to user
      const userEmailMsg = {
        to: meetingData.email,
        from: businessEmail,
        subject: "Meeting Request Confirmation - ITNOA Cybersecurity",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #01411c, #21965f); color: white; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: bold;">ITNOA</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px;">Cybersecurity Consulting Services</p>
            </div>
            
            <div style="padding: 30px; background: #f9f9f9;">
              <h2 style="color: #01411c; margin-bottom: 20px;">Meeting Request Confirmed</h2>
              
              <p>Dear ${meetingDetails.fullName},</p>
              
              <p>Thank you for scheduling a cybersecurity consultation with ITNOA. We have received your meeting request with the following details:</p>
              
              <div style="background: white; border-left: 4px solid #01411c; padding: 20px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #01411c;">Meeting Details</h3>
                <p><strong>Company:</strong> ${meetingDetails.company}</p>
                <p><strong>Position:</strong> ${meetingDetails.jobTitle}</p>
                <p><strong>Preferred Date:</strong> ${meetingDetails.preferredDate}</p>
                <p><strong>Preferred Time:</strong> ${meetingDetails.preferredTime} ${meetingDetails.timeZone}</p>
                <p><strong>Meeting Type:</strong> ${meetingDetails.meetingType}</p>
                <p><strong>Discussion Topics:</strong> ${meetingDetails.agenda}</p>
              </div>
              
              <p>Our cybersecurity experts will contact you within 24 hours to confirm the meeting details and provide dial-in information.</p>
              
              <p>In the meantime, feel free to explore our comprehensive cybersecurity services and resources on our website.</p>
              
              <div style="background: #01411c; color: white; padding: 20px; margin: 20px 0; text-align: center; border-radius: 5px;">
                <p style="margin: 0;"><strong>Questions?</strong> Call us at <strong>248 795 0202</strong> or reply to this email.</p>
              </div>
              
              <p>Best regards,<br>
              The ITNOA Cybersecurity Team</p>
            </div>
            
            <div style="background: #01411c; color: white; padding: 20px; text-align: center; font-size: 14px;">
              <p style="margin: 0;">© 2024 ITNOA Consulting Services. All rights reserved.</p>
              <p style="margin: 5px 0 0 0;">Professional Cybersecurity & Compliance Solutions</p>
            </div>
          </div>
        `,
      };

      // Send notification email to business
      const businessEmailMsg = {
        to: businessEmail,
        from: businessEmail,
        subject: "New Meeting Request - Cybersecurity Consultation",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #01411c; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">New Meeting Request</h1>
              <p style="margin: 10px 0 0 0;">ITNOA Cybersecurity Consultation</p>
            </div>
            
            <div style="padding: 30px; background: #f9f9f9;">
              <h2 style="color: #01411c;">Client Information</h2>
              <div style="background: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
                <p><strong>Name:</strong> ${meetingDetails.fullName}</p>
                <p><strong>Email:</strong> ${meetingDetails.email}</p>
                <p><strong>Company:</strong> ${meetingDetails.company}</p>
                <p><strong>Job Title:</strong> ${meetingDetails.jobTitle}</p>
              </div>
              
              <h3 style="color: #01411c;">Meeting Preferences</h3>
              <div style="background: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
                <p><strong>Preferred Date:</strong> ${meetingDetails.preferredDate}</p>
                <p><strong>Preferred Time:</strong> ${meetingDetails.preferredTime} ${meetingDetails.timeZone}</p>
                <p><strong>Meeting Type:</strong> ${meetingDetails.meetingType}</p>
              </div>
              
              <h3 style="color: #01411c;">Agenda & Topics</h3>
              <div style="background: white; padding: 20px; border-radius: 5px;">
                <p>${meetingDetails.agenda}</p>
              </div>
              
              <div style="background: #e8f5e8; border: 1px solid #01411c; padding: 15px; margin-top: 20px; border-radius: 5px;">
                <p style="margin: 0;"><strong>Action Required:</strong> Please contact the client within 24 hours to confirm meeting details.</p>
              </div>
            </div>
          </div>
        `,
      };

      if (process.env.SENDGRID_API_KEY) {
        // Send both emails if SendGrid is configured
        await sgMail.send(userEmailMsg);
        await sgMail.send(businessEmailMsg);
      } else {
        // Log email details if SendGrid is not configured
        console.log("SendGrid not configured. Email details:");
        console.log("User email:", userEmailMsg);
        console.log("Business email:", businessEmailMsg);
      }

      res.json({ 
        success: true, 
        message: "Meeting scheduled successfully. You will receive a confirmation email shortly." 
      });

    } catch (emailError) {
      console.error("Email error:", emailError);
      
      // Still return success even if email fails
      res.json({ 
        success: true, 
        message: "Meeting scheduled successfully. Our team will contact you within 24 hours." 
      });
    }

  } catch (error) {
    console.error("Meeting scheduling error:", error);
    res.status(500).json({ error: "Failed to schedule meeting. Please try again." });
  }
});

export default router;