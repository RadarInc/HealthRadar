import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {
            "role": "system",
            "content": "You will be given survey questions and their answers on a scale of 1-5 as well as a sentiment analysis in the format (x,x,x,x,x) where each of the values map to the corresponding emotion of the journal entry and use it to generate tips for the worker"
        },
        {
            "role": "user",
            "content": "Survey Questions"//surveyq
        },
        {
           "role": "user",
           "content": "(x,x,x,x,)"//anal
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
