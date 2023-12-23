// this contains all the code for the gateway intents 
// this will be used to create the bot
//require('dotenv').config();
const token = "you can put discord key here or use the statment above"; 
const {Client, GatewayIntentBits, Message } = require("discord.js");
// if we just call intents this happend because 

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ]
})

// this is used to make the  following event holder to call this 
client.on("ready", () =>{
    console.log("bot online")
});
// we will make another an event for the bot to respond+
const IGNORE_PREFIX = ["!", "*"]

client.on('messageCreate', (message) =>{
if(message.author.bot){
    return; 
}


});

client.login(token)
console.log("bot is ready ")
//function Discord_bot(){

///}

