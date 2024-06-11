const express = require('express');

// invoking express
const app = express();

// importing the routes
const version1Router = require('./routes/version1');

// using the router
app.use('/api/v1', version1Router);


// Setting the port
const PORT = 4000;

//STARTING THE SERVER
const start = async()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is listening to port: ${PORT}`)
    })
}

start();