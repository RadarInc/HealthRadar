import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

var prompt: string = "";




class HealthRadarContext {
    constructor() {}
    public async getSurveyQuestions(journalEntry: string): Promise<string> {
        prompt = journalEntry;
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": "You will be provided a journal entry from a construction worker, your task is to generate 10 survey questions that can be answered on a scale of 1-5"
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        const jsonQuestions = JSON.stringify(response.choices);
        console.log(jsonQuestions);

        return jsonQuestions;
    }
}