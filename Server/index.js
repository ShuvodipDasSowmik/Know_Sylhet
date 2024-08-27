require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const { connectDB, userModel, find, queryModel, findEdu, findTragedy, tragedyModel, eduModel } = require('./Database')
const bodyParser = require('body-parser');
// const path = require('path');
// const { connect } = require('http2');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// app.use(express.static('public'));

app.use(cors());
app.use(express.json());

const PORT = 4000 || process.env.PORT


app.get("/", async (req, res) => {
    // const path = '../public/index.html'
    // res.send("Hello I am server")
    connectDB();
    queryModel.find()
        .then(queries => res.json(queries))
        .catch(err => console.log(err))
})

app.get("/edu", (req, res) => {
    connectDB()
    eduModel.find()
        .then(queries => res.json(queries))
        .catch(err => console.log(err))
})

app.get("/tragedy", async (req, res) => {
    connectDB()
    tragedyModel.find()
        .then(queries => res.json(queries))
        .catch(err => console.log(err))
})

app.get('/travel', (req, res) => {
    connectDB()
    queryModel.find()
        .then(queries => res.json(queries))
        .catch(err => console.log(err))
})

app.post('/travel', async (req, res) => {
    try {
        const query = req.body
        console.log(query);

        const queryData = new queryModel({
            title: query.title,
            cardDescription: query.desc,
            imageLink: query.imageLink,
            howToReach: query.howToReach,
            whatToSee: query.whatToSee
        })

        await queryData.save()

    } catch (error) {

    }
})

app.post('/edu', async (req, res) => {
    try {
        const query = req.body
        console.log(query);

        const eduData = new eduModel({
            institute: query.institute,
            eduDescription: query.eduDescription,
            imageLink: query.imageLink,
            location: query.location,
        })

        await eduData.save()

    } catch (error) {

    }
})

app.post('/tragedy', async (req, res) => {
    try {
        const query = req.body
        console.log(query);

        const tragedyData = new tragedyModel({
            disaster: query.disaster,
            date: query.date,
            imageLink: query.imageLink,
            eventDescription: query.eventDescription,
        })

        await tragedyData.save()

    } catch (error) {

    }
})



app.post("/", async (req, res) => {
    try {
        const name = req.body.name
        const email = req.body.email
        const imageUrl = req.body.imageUrl

        console.log(name);
        console.log(email);
        console.log(imageUrl);

        const userData = new userModel({
            name: name,
            email: email,
            imageUrl: imageUrl
        })

        const findUser = await userModel.find()
            .or([{ name: name }])
            .countDocuments()
        console.log(findUser);

        //FIND IF INFO IS ALREADY IN DATABASE, IF YES CONTINUE, ELSE INSERT IN DATABASE

        findUser > 0 ? console.log("User already exists") : await userData.save();
    }
    catch (err) {
        // console.log("Data couldn't be saved");
    }
})

app.listen(PORT, (req, res) => {
    console.log("The Server is Running");
})
