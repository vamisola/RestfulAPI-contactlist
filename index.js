//import express
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
//initialize the app
let app = express();
//import routes
let apiRoutes = require('./api-routes');
//configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });

//send message for default URL
app.get('/', (req, res)=> res.send('Hello World with Express'));
//use Aou routes in the App
app.use('/api', apiRoutes);

//setup server port
let port = process.env.PORT || 8080;

//launch app to listen to specified port
app.listen(port, function() {
    console.log(`Running RestHub on port ${port} ` );
})