/**
 * Utility script to test and verify Gmail SMTP credentials configured in .env.local
 * Usage: npm run test:email
 */

const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const envPath = path.resolve(__dirname, "../.env.local");

if (!fs.existsSync(envPath)) {
  console.error("❌ Error: client/.env.local not found!");
  console.log("Please create client/.env.local with EMAIL_USER and EMAIL_APP_PASSWORD.");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, "utf-8");
let user = "";
let pass = "";
let recipient = "hunchmindintelligence@gmail.com";

for (const line of envContent.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (trimmed.startsWith("EMAIL_USER=")) {
    user = trimmed.slice("EMAIL_USER=".length).trim();
  }
  if (trimmed.startsWith("EMAIL_APP_PASSWORD=")) {
    pass = trimmed.slice("EMAIL_APP_PASSWORD=".length).replace(/[\s"']/g, "").trim();
  }
  if (trimmed.startsWith("CONTACT_RECEIVER_EMAIL=")) {
    recipient = trimmed.slice("CONTACT_RECEIVER_EMAIL=".length).trim();
  }
}

console.log("==================================================");
console.log("🔍 TESTING GMAIL SMTP CONFIGURATION");
console.log("==================================================");
console.log("• Sender Account (EMAIL_USER) :", user || "(NOT SET)");
console.log("• Password Length             :", pass ? `${pass.length} characters` : "(NOT SET)");
console.log("• Destination Email           :", recipient);
console.log("==================================================");

if (!user || !pass) {
  console.error("❌ EMAIL_USER or EMAIL_APP_PASSWORD is missing in .env.local.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
  connectionTimeout: 10000,
});

console.log("Connecting to smtp.gmail.com:465 with SSL...");

transporter.verify((error, success) => {
  if (error) {
    console.log("\n❌ AUTHENTICATION FAILED!");
    console.log("--------------------------------------------------");
    console.log("Error Code    :", error.code);
    console.log("Error Message :", error.message);
    console.log("--------------------------------------------------");

    if (error.code === "EAUTH" || (error.message && error.message.includes("535"))) {
      console.log("\n👉 WHY THIS HAPPENED (535 Bad Credentials):");
      console.log("1. Google rejected the 16-character App Password for " + user + ".");
      console.log("2. The App Password MUST be generated on the EXACT Google Account set in EMAIL_USER.");
      console.log("3. If you created the App Password under your personal Gmail (e.g. personal account),");
      console.log("   either:");
      console.log("   - Change EMAIL_USER in .env.local to that personal Gmail address (submissions will still go to " + recipient + ").");
      console.log("   OR");
      console.log("   - Log into " + user + " and generate a fresh App Password at https://myaccount.google.com/apppasswords.");
      console.log("\nQuick Guide to generate an App Password:");
      console.log("a. Open https://myaccount.google.com/security while logged into " + user);
      console.log("b. Ensure '2-Step Verification' is turned ON.");
      console.log("c. Go to https://myaccount.google.com/apppasswords");
      console.log("d. Name it 'HunchMind Website', click Create.");
      console.log("e. Paste the 16 letters into EMAIL_APP_PASSWORD in .env.local.");
    }
    process.exit(1);
  } else {
    console.log("\n✅ SUCCESS! Google SMTP credentials are verified and working!");
    console.log("Your website contact form is ready to deliver inquiries directly to:");
    console.log("📧 " + recipient);
    console.log("==================================================");
    process.exit(0);
  }
});
