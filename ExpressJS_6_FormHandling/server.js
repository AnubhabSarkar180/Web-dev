const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000; 

app.use(bodyParser.urlencoded({extended : true}));

app.get('/' , (req , res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/submit' , (req ,res) => {
    const {name , email} = req.body;
    const data = `Name: ${name} , Email: ${email}\n`;
    fs.appendFileSync("submissions.txt",data);
    res.send("Data added successfully");
})
app.listen(port , () => {
    console.log(`Server running on ${port}`);
})
