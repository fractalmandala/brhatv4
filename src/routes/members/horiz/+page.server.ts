import { Configuration, OpenAIApi } from 'openai';
import type { Actions } from './$types';

export const actions: Actions = {
    submit: async ({ request } : any) => {
        const promptFormData = await request.formData();
        const textPrompt = promptFormData.get('text-submission') as string;

        const configuration = new Configuration({
            apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);

        const textResponse = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: textPrompt,
            temperature: 0,
            max_tokens: 45,
        });

        return {
            response: textResponse.data.choices[0].text,
        }
    }
}
