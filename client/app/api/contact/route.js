import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Fallback recipient email if no env variable is provided.
export const DEFAULT_CONTACT_EMAIL = "hunchmindintelligence@gmail.com";

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    // Dynamically read environment variables per request so edits to .env.local take effect immediately
    const GMAIL_USER = (
      process.env.EMAIL_USER ||
      process.env.GMAIL_USER ||
      ""
    ).trim();

    // Strip accidental whitespace and quotes from password
    const GMAIL_PASS = (
      process.env.EMAIL_APP_PASSWORD ||
      process.env.GMAIL_APP_PASSWORD ||
      ""
    )
      .replace(/[\s"']/g, "")
      .trim();

    const RECIPIENT_EMAIL = (
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.CONTACT_EMAIL ||
      DEFAULT_CONTACT_EMAIL
    ).trim();

    const body = await request.json();
    const { name, phone, email, purpose, message } = body;

    // Server-side input validation
    const errors = {};
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please provide your name (at least 2 characters).";
    }

    const cleanPhone = phone ? phone.replace(/[\s\(\)\-\.]/g, "") : "";
    if (!cleanPhone || cleanPhone.length < 10 || !/^\+?[0-9]{10,15}$/.test(cleanPhone)) {
      errors.phone = "Please provide a valid phone number (at least 10 digits).";
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      errors.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!purpose || typeof purpose !== "string" || purpose.trim().length === 0) {
      errors.purpose = "Please select an inquiry category (Company or Career).";
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Please write a message of at least 10 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email ? email.trim() : "";
    const trimmedPurpose = purpose.trim();
    const trimmedMessage = message.trim();
    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    console.log("==================================================");
    console.log("📥 NEW CONTACT INQUIRY RECEIVED");
    console.log(`To: ${RECIPIENT_EMAIL}`);
    console.log(`Sender Account (EMAIL_USER): ${GMAIL_USER || "Not configured"}`);
    console.log(`From: ${trimmedName} (${trimmedPhone}, ${trimmedEmail || "No email"})`);
    console.log(`Category: ${trimmedPurpose}`);
    console.log(`Message: ${trimmedMessage}`);
    console.log("==================================================");

    // If Gmail credentials are set, send via Gmail SMTP
    if (GMAIL_USER && GMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS,
          },
          connectionTimeout: 15000,
          greetingTimeout: 10000,
          socketTimeout: 15000,
        });

        const mailOptions = {
          from: `"HunchMind Website" <${GMAIL_USER}>`,
          to: RECIPIENT_EMAIL,
          replyTo: trimmedEmail || GMAIL_USER,
          subject: `[New Inquiry: ${trimmedPurpose}] from ${trimmedName}`,
          text: `
New Inquiry Received from HunchMind Website:

Name: ${trimmedName}
Phone: ${trimmedPhone}
Email: ${trimmedEmail || "Not provided"}
Category: ${trimmedPurpose}
Submitted: ${submissionTime} IST

Message:
${trimmedMessage}
          `.trim(),
          html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Inquiry - HunchMind Group</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f7; color: #102638;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2eceb; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
    
    <!-- Top Branding Banner -->
    <div style="background: #00363C; padding: 28px 32px; color: #ffffff;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
        HunchMind Group
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 13px; color: #65DDE0; font-weight: 500;">
        New Website Contact Submission
      </p>
    </div>

    <!-- Body Container -->
    <div style="padding: 32px;">
      
      <!-- Category Badge -->
      <div style="display: inline-block; background-color: #DFF8F7; color: #005B62; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 6px 14px; border-radius: 9999px; margin-bottom: 24px;">
        ${escapeHtml(trimmedPurpose)}
      </div>

      <!-- Sender Details Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13.5px;">
        <tbody>
          <tr style="border-bottom: 1px solid #f0f5f5;">
            <td style="padding: 10px 0; color: #536573; font-weight: 600; width: 120px;">Sender Name:</td>
            <td style="padding: 10px 0; color: #102638; font-weight: 700;">${escapeHtml(trimmedName)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f5f5;">
            <td style="padding: 10px 0; color: #536573; font-weight: 600;">Phone:</td>
            <td style="padding: 10px 0; color: #005B62; font-weight: 600;">
              <a href="tel:${escapeHtml(trimmedPhone)}" style="color: #005B62; text-decoration: none;">${escapeHtml(trimmedPhone)}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f5f5;">
            <td style="padding: 10px 0; color: #536573; font-weight: 600;">Email:</td>
            <td style="padding: 10px 0; color: #102638;">
              <a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #005B62; text-decoration: none; font-weight: 500;">${escapeHtml(trimmedEmail)}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f5f5;">
            <td style="padding: 10px 0; color: #536573; font-weight: 600;">Category:</td>
            <td style="padding: 10px 0; color: #102638; font-weight: 600;">${escapeHtml(trimmedPurpose)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #536573; font-weight: 600;">Received:</td>
            <td style="padding: 10px 0; color: #536573;">${submissionTime} IST</td>
          </tr>
        </tbody>
      </table>

      <!-- Message Container -->
      <div style="background-color: #FAFAFA; border: 1px solid #E2ECEB; border-radius: 12px; padding: 20px;">
        <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #536573; margin-bottom: 10px;">
          Message
        </div>
        <div style="font-size: 14px; line-height: 1.6; color: #102638; white-space: pre-wrap;">
${escapeHtml(trimmedMessage)}
        </div>
      </div>

    </div>

    <!-- Bottom Footer Note -->
    <div style="background: #F7FAFA; padding: 18px 32px; border-top: 1px solid #E2ECEB; font-size: 11px; color: #82929e; text-align: center;">
      This email was generated by the HunchMind Group website contact form and delivered to <strong>${RECIPIENT_EMAIL}</strong>.
    </div>

  </div>
</body>
</html>
          `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully via Gmail SMTP! MessageId:", info.messageId);

        return NextResponse.json({
          success: true,
          message: `Your message has been sent successfully to ${RECIPIENT_EMAIL}. Our team will get back to you shortly.`,
          recipient: RECIPIENT_EMAIL,
        });
      } catch (smtpError) {
        console.error("❌ Gmail SMTP send error:", smtpError);

        let userFriendlyError = "Failed to dispatch email via Gmail SMTP.";
        if (
          smtpError.code === "EAUTH" ||
          smtpError.responseCode === 535 ||
          (smtpError.message && smtpError.message.includes("535"))
        ) {
          userFriendlyError = `Gmail authentication failed (535 Bad Credentials). The 16-character App Password in .env.local was rejected by Gmail. Please make sure: 1) EMAIL_USER (${GMAIL_USER}) is the exact account where you generated the App Password, 2) 2-Step Verification is turned ON for this Google account, and 3) A fresh 16-character App Password has been generated at myaccount.google.com/apppasswords.`;
        } else if (smtpError.code === "ETIMEDOUT" || smtpError.code === "ESOCKET") {
          userFriendlyError = "Connection timeout reaching Gmail SMTP server (smtp.gmail.com:465). Please verify network access.";
        }

        return NextResponse.json(
          {
            success: false,
            message: userFriendlyError,
            errorCode: smtpError.code || "SMTP_ERROR",
          },
          { status: 500 }
        );
      }
    } else {
      // Credentials not yet provided in .env.local: log guidance
      console.warn("⚠️ NOTICE: EMAIL_USER or EMAIL_APP_PASSWORD not set in .env.local.");
      console.warn("The inquiry was recorded to console. Once you add your App Password to .env.local, emails will be delivered directly to Gmail.");

      return NextResponse.json({
        success: true,
        message: `Your inquiry has been recorded. Add your EMAIL_APP_PASSWORD in .env.local to enable live Gmail delivery to ${RECIPIENT_EMAIL}.`,
        recipient: RECIPIENT_EMAIL,
        mockMode: true,
      });
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
