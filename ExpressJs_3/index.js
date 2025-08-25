const express = require('express');

const app= express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("<h1>Welcome to Express Server</h1>");
})

app.post("/submit" , (req,res) => {
    console.log(req.body);
    const {name , email}= req.body;

    if(!name || !email)
    {
       return res.status(400).json({error:"Data cant be empty"})
    }
   res.json({message:"Data received successfully", data:req.body});
})
const port=3000;
app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
})