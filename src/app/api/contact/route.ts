import { ConfidentialClientApplication } from "@azure/msal-node";
import { NextResponse } from "next/server";

const msalClient = new ConfidentialClientApplication({
  auth: {
    clientId: process.env.MICROSOFT_CLIENT_ID!,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
    authority: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}`,
  },
});

export async function POST(request: Request) {
  try {
    // Get form data
    const data = await request.json();

    // Get Microsoft Graph access token
    const tokenResponse = await msalClient.acquireTokenByClientCredential({
      scopes: ["https://graph.microsoft.com/.default"],
    });

    const accessToken = tokenResponse?.accessToken;

    if (!accessToken) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to get access token.",
        },
        { status: 500 }
      );
    }

    console.log("Access Token Generated Successfully");

    // Send email
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/users/${process.env.MICROSOFT_SENDER_EMAIL}/sendMail`,
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
              content: `
New Contact Form Submission

First Name: ${data.firstName}
Last Name: ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
              `,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: "contact@techsuitesystems.com",
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

      console.error("Microsoft Graph Error:");
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
          error,
        },
        { status: 500 }
      );
    }

    console.log("Email sent successfully!");
    console.log("Received Form Data:", data);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Server Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}