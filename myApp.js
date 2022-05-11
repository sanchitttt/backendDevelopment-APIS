let express = require('express');
let app = express();
require('dotenv').config();
let messageStyle = process.env.MESSAGE_STYLE;

app.get("/json", (request,response) => {
    const message = messageStyle==="uppercase"?"HELLO JSON":"Hello json";
    response.json({"message":message});
    console.log(messageStyle);
})






































 module.exports = app;
