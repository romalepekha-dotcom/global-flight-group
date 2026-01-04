import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, aircraft, budget, delivery, message } = body;
    
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    const smtpConfigured = 
      process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS;

    if (!smtpConfigured) {
      // Fallback: log to console and return success
      console.log('=== CONSULTATION REQUEST (SMTP not configured) ===');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone || 'Not provided');
      console.log('Aircraft Interest:', aircraft || 'Not specified');
      console.log('Budget:', budget || 'Not specified');
      console.log('Delivery Region:', delivery || 'Not specified');
      console.log('Message:', message || 'No message');
      console.log('================================================');

      return NextResponse.json({
        ok: true,
        fallback: true,
        message: 'Request received. If you don\'t hear back within 24h, email roman@globalflightgroup.com'
      });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare email content
    const emailContent = `
New Consultation Request from Global Flight Group Website

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Aircraft Type of Interest: ${aircraft || 'Not specified'}
Budget Range: ${budget || 'Not specified'}
Delivery Region: ${delivery || 'Not specified'}

Message:
${message || 'No message provided'}

---
Submitted: ${new Date().toLocaleString()}
    `.trim();

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'roman@globalflightgroup.com',
      subject: `New Consultation Request from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Consultation Request</h2>
          <p style="color: #64748b; font-size: 14px;">Global Flight Group Website</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Aircraft Type of Interest:</strong> ${aircraft || 'Not specified'}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Delivery Region:</strong> ${delivery || 'Not specified'}</p>
          </div>

          ${message ? `
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
            Submitted: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      ok: true,
      message: 'Consultation request sent successfully'
    });

  } catch (error) {
    console.error('Error processing consultation request:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        fallback: true,
        message: 'There was an issue sending your request. Please email roman@globalflightgroup.com directly.'
      },
      { status: 500 }
    );
  }
}

