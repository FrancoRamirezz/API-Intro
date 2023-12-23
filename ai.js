// there are another way to make import it
const {Configuration,OpenAI} = require('openai')

const openai = new OpenAI({
    apiKey: "this api key goes here"
});




async function main(){
    const prompt =" Act as a Data Structure and Algo tutor who helps students learn these topics. Answer thier questions in a professor tone" 
        
    const response = await OpenAi.createCompletion(
    {
    model : "gpt-3.5-turbo-1106",
    prompt : prompt,
    temperature : 0.8,
    max_tokens: 300,
    });
        console.log(response.data.choices[0].text)
    };

console.log((main))


// you can import it from this file
// by using the export statment
