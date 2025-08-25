const express = require("express");
const app = express();

const port = 3000;

let taskArr = []; // To store tasks

app.use(express.json());

app.post("/task/add",(req , res) => {
    const {title , desc} = req.body;

    if(!title)
    {
        return res.status(404).json({message:"Task title not given"});
    }

    let newTask = {id: taskArr.length + 1, title : title , desc : desc || ""};
    taskArr.push(newTask);
    res.status(200).json({message:"Task added successfully"});
});

app.get("/task/show",(req,res) => {
    res.json({data : taskArr})
});

app.get("/task/show/:taskId", (req , res) => {
    const taskId = req.params.taskId;

    const searchedTask = taskArr.find((task) => {
        task.id == taskId;
    })

    if(!searchedTask)
    {
        return res.status(404).json({message: "Task not found"});
    }
    res.status(200).json({message:"Task found"});
});

app.listen(port, () => {
    console.log(`Console is running on port ${port}`);
});