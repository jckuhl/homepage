/**
 * Simple server for grabbing API keys from
 */

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyparser.json());
app.use(cors());

const port = 8000;

const api = { 
    wx: process.env.WX_API,
    twit: process.env.TWIT_API,
    fb: process.env.FB_API
}

app.listen(port, ()=> console.log(`Listening on port ${port}`));

app.get('/:key', (request, response)=> {
    const key = request.params.key;
    if(Object.getOwnPropertyNames(api).includes(key)) {
        response.send(JSON.stringify(api[key]));
        response.end();
    } else {
        response.sendStatus(404);
    }  
});