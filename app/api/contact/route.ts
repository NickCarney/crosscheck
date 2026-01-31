import { Resend } from "resend";
import { z } from "zod";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  newsletter: z.boolean().optional(),
  formType: z.string().optional(), // To identify which form (contact, playbook, etc.)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
      newsletter,
      formType = "contact",
    } = validatedData;

    // Prepare email content
    const emailSubject =
      formType === "playbook"
        ? "New ERP Hiring Playbook Request"
        : "New Contact Form Submission";

    const emailHtml = `
      <h2>${emailSubject}</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      ${newsletter ? "<p><em>Subscribed to newsletter</em></p>" : ""}
      <hr />
      <p><small>Form Type: ${formType}</small></p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Crosscheck Staffing <onboarding@resend.dev>", // You'll need to verify your domain
      to: ["Dolson@crosscheckstaffing.com"], // Drake's email
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
