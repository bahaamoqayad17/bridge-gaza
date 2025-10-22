import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER, // Your email
    pass: process.env.NEXT_PUBLIC_SMTP_PASS, // Your email password or app password
  },
});

// Verify transporter configuration
transporter.verify((error: any, success: any) => {
  if (error) {
    console.error("SMTP configuration error:", error);
  } else {
    console.log("SMTP server is ready to take our messages");
  }
});

interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html?: string
): Promise<boolean> {
  try {
    const mailOptions: EmailOptions = {
      to,
      subject,
      text,
      html: html || text, // Use HTML if provided, otherwise use text
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

// Specific email templates
export async function sendPasswordResetEmail(
  email: string,
  verificationCode: string
): Promise<boolean> {
  const subject = "Password Reset - Bridge Gaza";
  const text = `Your password reset verification code: ${verificationCode}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); padding: 30px; border-radius: 10px; text-align: center;">
        <h1 style="color: #FBBF24; margin: 0; font-size: 28px; font-weight: bold;">Bridge Gaza</h1>
        <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Connecting Gaza to the World</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin-top: 20px;">
        <h2 style="color: #1F2937; text-align: center; margin-bottom: 20px;">Password Reset Request</h2>
        
        <p style="color: #6B7280; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Hello,
        </p>
        
        <p style="color: #6B7280; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          You received this email because you requested to reset your password for your Bridge Gaza account.
        </p>
        
        <div style="background: #fff; border: 2px solid #3B82F6; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
          <p style="color: #374151; font-size: 14px; margin: 0 0 10px 0;">Verification Code:</p>
          <div style="background: #3B82F6; color: white; font-size: 24px; font-weight: bold; padding: 15px; border-radius: 5px; letter-spacing: 3px;">
            ${verificationCode}
          </div>
        </div>
        
        <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
          Use this code to reset your password. This code is valid for 15 minutes only.
        </p>
        
        <div style="background: #FEF3C7; border: 1px solid #F59E0B; border-radius: 5px; padding: 15px; margin: 20px 0;">
          <p style="color: #92400E; font-size: 14px; margin: 0;">
            <strong>Important:</strong> If you didn't request a password reset, please ignore this email.
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
        <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
          © 2024 Bridge Gaza - Connecting Gaza to the World. All rights reserved.
        </p>
      </div>
    </div>
  `;

  return await sendEmail(email, subject, text, html);
}

export async function sendWelcomeEmail(
  email: string,
  name: string
): Promise<boolean> {
  const subject = "Welcome to Bridge Gaza - Your Account is Ready!";
  const text = `Hello ${name}, your Bridge Gaza account has been created successfully!`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); padding: 30px; border-radius: 10px; text-align: center;">
        <h1 style="color: #FBBF24; margin: 0; font-size: 28px; font-weight: bold;">Bridge Gaza</h1>
        <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Connecting Gaza to the World</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin-top: 20px;">
        <h2 style="color: #1F2937; text-align: center; margin-bottom: 20px;">Welcome to Bridge Gaza!</h2>
        
        <p style="color: #6B7280; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Hello <strong>${name}</strong>,
        </p>
        
        <p style="color: #6B7280; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Welcome to Bridge Gaza! Your account has been successfully created. We're excited to have you join our community of mentors and students working together to bridge knowledge and opportunities.
        </p>
        
        <div style="background: #D1FAE5; border: 1px solid #10B981; border-radius: 5px; padding: 15px; margin: 20px 0;">
          <p style="color: #065F46; font-size: 14px; margin: 0;">
            <strong>✅ Your account is active and ready to use</strong>
          </p>
        </div>
        
        <p style="color: #6B7280; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          You can now:
        </p>
        
        <ul style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
          <li>Connect with mentors from around the world</li>
          <li>Access learning resources and opportunities</li>
          <li>Join mentorship programs</li>
          <li>Build your professional network</li>
          <li>Share your knowledge and expertise</li>
        </ul>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
          }" 
             style="background: #3B82F6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
            Get Started
          </a>
        </div>
        
        <div style="background: #FEF3C7; border: 1px solid #F59E0B; border-radius: 5px; padding: 15px; margin: 20px 0;">
          <p style="color: #92400E; font-size: 14px; margin: 0;">
            <strong>Need help?</strong> Our support team is here to assist you. Feel free to reach out if you have any questions.
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
        <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
          © 2024 Bridge Gaza - Connecting Gaza to the World. All rights reserved.
        </p>
      </div>
    </div>
  `;

  return await sendEmail(email, subject, text, html);
}

// Mentorship-specific email templates
export async function sendBookingConfirmationEmail(
  studentEmail: string,
  studentName: string,
  mentorName: string,
  sessionDate: string,
  sessionTime: string
): Promise<boolean> {
  const subject = "Mentorship Session Confirmed - Bridge Gaza";
  const text = `Your mentorship session with ${mentorName} has been confirmed for ${sessionDate} at ${sessionTime}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); padding: 30px; border-radius: 10px; text-align: center;">
        <h1 style="color: #FBBF24; margin: 0; font-size: 28px; font-weight: bold;">Bridge Gaza</h1>
        <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Connecting Gaza to the World</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin-top: 20px;">
        <h2 style="color: #1F2937; text-align: center; margin-bottom: 20px;">Session Confirmed!</h2>
        
        <p style="color: #6B7280; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Hello <strong>${studentName}</strong>,
        </p>
        
        <p style="color: #6B7280; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Great news! Your mentorship session has been confirmed.
        </p>
        
        <div style="background: #fff; border: 2px solid #10B981; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #1F2937; margin: 0 0 15px 0; text-align: center;">Session Details</h3>
          <p style="color: #374151; font-size: 16px; margin: 5px 0;"><strong>Mentor:</strong> ${mentorName}</p>
          <p style="color: #374151; font-size: 16px; margin: 5px 0;"><strong>Date:</strong> ${sessionDate}</p>
          <p style="color: #374151; font-size: 16px; margin: 5px 0;"><strong>Time:</strong> ${sessionTime}</p>
        </div>
        
        <div style="background: #FEF3C7; border: 1px solid #F59E0B; border-radius: 5px; padding: 15px; margin: 20px 0;">
          <p style="color: #92400E; font-size: 14px; margin: 0;">
            <strong>Reminder:</strong> Please prepare your questions and goals for the session. Your mentor is looking forward to helping you grow!
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
        <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
          © 2024 Bridge Gaza - Connecting Gaza to the World. All rights reserved.
        </p>
      </div>
    </div>
  `;

  return await sendEmail(studentEmail, subject, text, html);
}

export async function sendMentorNotificationEmail(
  mentorEmail: string,
  mentorName: string,
  studentName: string,
  sessionDate: string,
  sessionTime: string
): Promise<boolean> {
  const subject = "New Mentorship Session Request - Bridge Gaza";
  const text = `You have a new mentorship session request from ${studentName} for ${sessionDate} at ${sessionTime}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); padding: 30px; border-radius: 10px; text-align: center;">
        <h1 style="color: #FBBF24; margin: 0; font-size: 28px; font-weight: bold;">Bridge Gaza</h1>
        <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Connecting Gaza to the World</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin-top: 20px;">
        <h2 style="color: #1F2937; text-align: center; margin-bottom: 20px;">New Session Request</h2>
        
        <p style="color: #6B7280; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Hello <strong>${mentorName}</strong>,
        </p>
        
        <p style="color: #6B7280; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          You have received a new mentorship session request from a student.
        </p>
        
        <div style="background: #fff; border: 2px solid #3B82F6; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #1F2937; margin: 0 0 15px 0; text-align: center;">Session Details</h3>
          <p style="color: #374151; font-size: 16px; margin: 5px 0;"><strong>Student:</strong> ${studentName}</p>
          <p style="color: #374151; font-size: 16px; margin: 5px 0;"><strong>Date:</strong> ${sessionDate}</p>
          <p style="color: #374151; font-size: 16px; margin: 5px 0;"><strong>Time:</strong> ${sessionTime}</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
          }/mentors/profile" 
             style="background: #3B82F6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
            Manage Sessions
          </a>
        </div>
        
        <div style="background: #D1FAE5; border: 1px solid #10B981; border-radius: 5px; padding: 15px; margin: 20px 0;">
          <p style="color: #065F46; font-size: 14px; margin: 0;">
            <strong>Thank you for making a difference!</strong> Your mentorship helps students in Gaza access global opportunities.
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
        <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
          © 2024 Bridge Gaza - Connecting Gaza to the World. All rights reserved.
        </p>
      </div>
    </div>
  `;

  return await sendEmail(mentorEmail, subject, text, html);
}

export async function sendContactFormNotificationEmail(
  adminEmail: string,
  contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
): Promise<boolean> {
  const subject = "New Contact Form Submission - Bridge Gaza";
  const text = `New contact form submission from ${contactData.name} (${contactData.email})`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); padding: 30px; border-radius: 10px; text-align: center;">
        <h1 style="color: #FBBF24; margin: 0; font-size: 28px; font-weight: bold;">Bridge Gaza</h1>
        <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Connecting Gaza to the World</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin-top: 20px;">
        <h2 style="color: #1F2937; text-align: center; margin-bottom: 20px;">New Contact Form Submission</h2>
        
        <div style="background: #fff; border: 2px solid #3B82F6; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <p style="color: #374151; font-size: 16px; margin: 5px 0;"><strong>Name:</strong> ${contactData.name}</p>
          <p style="color: #374151; font-size: 16px; margin: 5px 0;"><strong>Email:</strong> ${contactData.email}</p>
          <p style="color: #374151; font-size: 16px; margin: 5px 0;"><strong>Subject:</strong> ${contactData.subject}</p>
          <div style="margin-top: 15px;">
            <p style="color: #374151; font-size: 14px; margin: 0 0 5px 0;"><strong>Message:</strong></p>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #3B82F6;">
              <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin: 0;">${contactData.message}</p>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="mailto:${contactData.email}" 
             style="background: #3B82F6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
            Reply to ${contactData.name}
          </a>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
        <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
          © 2024 Bridge Gaza - Connecting Gaza to the World. All rights reserved.
        </p>
      </div>
    </div>
  `;

  return await sendEmail(adminEmail, subject, text, html);
}

export default transporter;
