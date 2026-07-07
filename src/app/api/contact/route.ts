import { ConfidentialClientApplication } from "@azure/msal-node";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function getEnvValue(name: string) {
  return process.env[name]?.trim();
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const firstName = typeof data?.firstName === "string" ? data.firstName.trim() : "";
    const lastName = typeof data?.lastName === "string" ? data.lastName.trim() : "";
    const email = typeof data?.email === "string" ? data.email.trim() : "";
    const phone = typeof data?.phone === "string" ? data.phone.trim() : "";
    const message = typeof data?.message === "string" ? data.message.trim() : "";

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all form fields.",
        },
        { status: 400 }
      );
    }

    const tenantId = getEnvValue("MICROSOFT_TENANT_ID");
    const clientId = getEnvValue("MICROSOFT_CLIENT_ID");
    const clientSecret = getEnvValue("MICROSOFT_CLIENT_SECRET");
    const senderEmail = getEnvValue("MICROSOFT_SENDER_EMAIL") || getEnvValue("CONTACT_FROM_EMAIL");
    const recipientEmail =
      getEnvValue("CONTACT_RECIPIENT_EMAIL") ||
      getEnvValue("MICROSOFT_RECIPIENT_EMAIL") ||
      "contact@techsuitesystems.com";

    if (!tenantId || !clientId || !clientSecret || !senderEmail) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured. Please set MICROSOFT_TENANT_ID, MICROSOFT_CLIENT_ID, MICROSOFT_CLIENT_SECRET, and MICROSOFT_SENDER_EMAIL in .env.local.",
        },
        { status: 500 }
      );
    }

    const msalClient = new ConfidentialClientApplication({
      auth: {
        clientId,
        clientSecret,
        authority: `https://login.microsoftonline.com/${tenantId}`,
      },
    });

    const tokenResponse = await msalClient.acquireTokenByClientCredential({
      scopes: ["https://graph.microsoft.com/.default"],
    });

    const accessToken = tokenResponse?.accessToken;

    if (!accessToken) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to get Microsoft Graph access token. Check your Azure app permissions.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(senderEmail)}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: "New Contact Form Submission",
            body: {
              contentType: "Text",
              content: `New Contact Form Submission\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: recipientEmail,
                },
              },
            ],
          },
          saveToSentItems: false,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Microsoft Graph Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "The email service rejected the submission. Please verify the Microsoft 365 app permissions and mailbox configuration.",
          error,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Server Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit the form right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}