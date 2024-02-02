const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');

const connectToMongo = ()=>{
    mongoose.connect("mongodb+srv://shalinsheth4915:O5sjrqzt4ioURKou@cluster0.4hkidvn.mongodb.net/CRUD_db?retryWrites=true&w=majority").then(()=>{
        console.log("connection successful"); 
    })
}

module.exports = connectToMongo;

