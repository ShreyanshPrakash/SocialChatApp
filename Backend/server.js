const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');


const config = require('./config.dev.json');

const app = express();

// Middle wares
app.use(
    express.static(
        path.join( __dirname, config.staticPath )
    )
)

// API endpoints



// Serving index file
app.get( '*', (req,res) => {

    fs.createReadStream(
        path.join( __dirname, config.staticPath , 'index.html')
    ).pipe(res);

});



// use https to create the server and listen
app.listen( config.port , () => {
    console.log(`listening at ${config.port}`);
})