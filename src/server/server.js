const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyparser.json());
app.use(cors());

const port = 8000;

const api = { key: process.env.WX_API }

app.listen(port, ()=> console.log(`Listening on port ${port}`));

app.get('/', (request, response)=> {
    response.send(api);
    response.end();
});