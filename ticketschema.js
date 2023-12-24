const {Schema, model, Guild} = require('discord.js')
//var dict = new Object();

// or the shorthand way
//var dict = {};
let ticketSchema = new Schema(
    // we are going to make an array with a dictionary
    {
        Guild: String,
        Catergory : String

    }
);
module.exports = model('ticktSchema', ticketSchema)




