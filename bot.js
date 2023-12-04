
// this will be used to create the bot
require("dotenv/env");
const {Client} = require('discord.js');
const {OpenAi} = require('openai');


const client = new Client({
    intents: ['Guilds', 'GuildMembers', 'GuildMessages', "MessagesContent"]
})


// this is used to make the  following event holder 
client.on("the bot is ready", () =>{
    console.log("bot online")
})

client.login(process.env.Token)


console.log(response)
function Discord_bot(){
    console.log("Hello World")
}

discord = Discord_bot()

