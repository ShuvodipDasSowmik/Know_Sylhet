require('dotenv').config()
const mongoose = require('mongoose')
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;


const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;

const client = new MongoClient(`mongodb+srv://${mongo_username}:${mongo_password}@cluster0.0qgxffx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

const connectDB = async () =>{
    try {
        await mongoose.connect(`mongodb+srv://${mongo_username}:${mongo_password}@cluster0.0qgxffx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("Database is Connected");
    } catch (error) {
        console.log("Database is not connected");
        console.log(error.message);
        process.exit(1);
    }
}

const userInfo = new mongoose.Schema({
    email: String,
    name: String,
    imageUrl: String
})


const userModel = mongoose.model("users", userInfo);

const queryInfo = new mongoose.Schema({
    title: String,
    cardDescription: String,
    imageLink: String,
    howToReach: String,
    whatToSee: String,
})

const queryModel = mongoose.model("queries", queryInfo);

const eduInfo = new mongoose.Schema({
    institute: String,
    location: String,
    eduDescription: String,
    imageLink: String
})

const eduModel = mongoose.model("eduqueries", eduInfo)

const tragedyInfo = new mongoose.Schema({
  disaster: String,
  date: String,
  eventDescription: String,
  imageLink: String
})

const tragedyModel = mongoose.model("tragedyqueries", tragedyInfo)

module.exports = {connectDB, userModel, queryModel, eduModel, tragedyModel}