'use server';

/**
 * @fileOverview Provides an AI-powered chatbot tool to answer basic queries about startup registration and funding schemes.
 *
 * - startupQueryTool - A function that handles the startup query process.
 * - StartupQueryToolInput - The input type for the startupQueryTool function.
 * - StartupQueryToolOutput - The return type for the startupQueryTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StartupQueryToolInputSchema = z.object({
  query: z.string().describe('The user query about startup registration, funding schemes, or related topics.'),
});
export type StartupQueryToolInput = z.infer<typeof StartupQueryToolInputSchema>;

const StartupQueryToolOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query, providing relevant information and suggesting Ewolyn services.'),
});
export type StartupQueryToolOutput = z.infer<typeof StartupQueryToolOutputSchema>;

export async function startupQueryTool(input: StartupQueryToolInput): Promise<StartupQueryToolOutput> {
  return startupQueryToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'startupQueryPrompt',
  input: {schema: StartupQueryToolInputSchema},
  output: {schema: StartupQueryToolOutputSchema},
  prompt: `You are an AI-powered chatbot designed to answer basic questions about startup registration, funding schemes, and related topics in India.

  Provide concise and informative answers. If the query is about a specific topic where Ewolyn offers services, suggest those services to the user.

  Query: {{{query}}}
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_ONLY_HIGH',
      }
    ],
  }
});

const startupQueryToolFlow = ai.defineFlow(
  {
    name: 'startupQueryToolFlow',
    inputSchema: StartupQueryToolInputSchema,
    outputSchema: StartupQueryToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
