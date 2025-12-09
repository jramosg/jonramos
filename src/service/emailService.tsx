import { Resend } from 'resend';
import { render, toPlainText } from '@react-email/render';
import type { Langs } from '@/i18n/ui';
import { logger } from '@/logger';

export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
  language: Langs;
}) {
  const resend = import.meta.env.RESEND_API_KEY
    ? new Resend(import.meta.env.RESEND_API_KEY)
    : null;

  if (!resend) {
    logger.error('Resend API key missing, simulating email send');
    return { success: false, error: 'Resend API key missing' };
  }

  try {
    const ContactEmail = (await import('@mail/emails/ContactEmail')).default;
    const emailHtml = await render(<ContactEmail {...data} />);
    const plainText = toPlainText(emailHtml);

    const result = await resend.emails.send({
      from: import.meta.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: import.meta.env.CONTACT_EMAIL || 'jon@example.com', // Replace with actual destination
      subject: `New Contact Message from ${data.name}`,
      replyTo: data.email,
      html: emailHtml,
      text: plainText,
    });

    return { success: true, data: result };
  } catch (error) {
    logger.error('Error sending contact email: ' + error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
