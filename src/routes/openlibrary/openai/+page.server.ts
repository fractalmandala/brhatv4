import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-TQnzOuEZQsRJ4DKLIZyOYBzp",
    apiKey: import.meta.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});