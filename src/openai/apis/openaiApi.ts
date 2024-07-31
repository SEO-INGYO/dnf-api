import OpenAI from "openai";

const openaiApiKey = process.env.OPENAI_API_KEY as string;

export const openai  = new OpenAI({
    apiKey: openaiApiKey,
    organization: "org-6QSnUlNZxviLMxrHVz8CSfvu",
});