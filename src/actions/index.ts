import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { sendContactEmail } from '@/service/emailService';

export const server = {
  submitContact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(1, 'Name is required'),
      email: z.string().email('Invalid email'),
      message: z.string().min(1, 'Message is required'),
      language: z.enum(['es', 'eu', 'en']).default('en'),
    }),
    handler: async (input) => {
      const emailResult = await sendContactEmail(input);

      if (!emailResult.success) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Error sending email. Please try again.',
        });
      }

      return {
        success: true,
        message: 'Message sent successfully',
      };
    },
  }),
};
