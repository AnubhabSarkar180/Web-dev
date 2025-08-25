const express = require('express');

const app = express();
const student = [{
    "roll": 1,
    "name": "Anubhab Sarkar",
    "email": "anubh@gmail.com"
},
{
    "roll": 2,
    "name": "Afbaukfb",
    "email": "anubh@gmail.com"
}];
app.use(express.json());
app.get('/students', (req, res) => {
    res.json(student);
})


app.post("/students", (req, res) => {
    const {name , email} = req.body;
    if(!name || !email)
    {
        return res.status(400).json({error:"Name and email required"});
    }
    const newStudent = {roll: student.length+1 , name ,email};
    student.push(newStudent);

    res.status(200).json({message: "User created successfully"});   
})

app.put("/students" , (req ,res) => {
    const { roll, name, email } = req.body;
    const index = student.findIndex((s) => s.roll == roll)

    if(index === -1)
        return res.status(404).json({error: "Student not found"});
    student[index].name = name;
    student[index].email = email; 
    return res.status(200).json({message: "Student updated successfully"});
})

app.delete("/students" , (req, res) => 
{
    const {roll} = req.body;
    const index= student.findIndex((s) => s.roll == roll);

    if(index === -1)
        return res.status(404).json({error : "Staudent not found "});
    student.splice(index,1);
    return res.status(200).json({message: "User deleted successfully"});
})
const port = 3000;
app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})