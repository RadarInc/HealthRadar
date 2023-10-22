const axios = require('axios');

// Define the API endpoint
const url = "https://api.openai.com/v1/completions";

// Define the headers for the API request
const headers = {
    "Content-Type": "application/json",
    "Authorization": "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"
};

// Define the prompt and journal entry
const prompt = "Generate a 10 question survey mental health check questions using the provided journal entry of a construction worker as a reference:";
const journalEntry = "I feel bad";

// Define the data for the API request
const data = {
    "model": "gpt-3.5-turbo",
    "messages": [
        {
            "role": "system",
            "content": `${prompt} "${journalEntry}"`
        }
    ]
};

// Make the API request
axios.post(url, data, {headers: headers})
.then(response => {
    // Get the response text
    const responseText = response.data.choices[0].message.content.trim();

    // Split the response text into an array of questions
    const questions = responseText.split('\n');

    // Map each question to an object with a question and response field
    const questionsJSON = questions.map(question => {
        return { question: question, response: "" };
    });

    // Print the JSON array of questions
    console.log(JSON.stringify(questionsJSON));
    print(questionsJSON);

})
.catch(error => {
    console.error(error);
});

export function post(arg0) {
  throw new Error("Function not implemented.");
}
