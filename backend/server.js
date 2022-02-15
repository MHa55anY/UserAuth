const express = require("express");
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv').config();
const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session') (session)
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

const app = express()

//Setup MongoDB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))


// Body Parsers
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//View Engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Session Middleware

const store = new MongoDBSession ({
    uri: process.env.MONGO_URI,
    collection: 'mySessions'
})

app.use(
    session({
        secret: 'key that signs cookie',
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);



// Routes Configuration 
app.get('/', (req,res)=>{res.redirect('/login')})
app.use('/login', require('./routes/login'))
app.use('/logout', require('./routes/logout'))


app.listen(port, () => {console.log(`Server started on port: ${port}` )})
