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
// we can add more to the ticketSchema
module.exports = model('ticktSchema', ticketSchema)




