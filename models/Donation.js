const { Schema, model } = require("mongoose");

const donationSchema = new Schema({
    //donation data 
    // age 
    // flüge (array)
    // Bus 
    // Bahn 
    // Auto
    // Austosß 
    //nötige Spendensumme 
    // gespendete Summe
    
})

const Donation = model("Donation", donationSchema)
module.exports = Donation
