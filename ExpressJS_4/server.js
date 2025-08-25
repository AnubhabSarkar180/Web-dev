const express = require('express');
const app = express();
app.use(express.json());
const users=[];
app.get('/', (req, res) => {
  res.send('Hi this is Anubhab Sarkar.');
});

app.get('/users', (req,res) => {
    res.json(users);
})

app.post('/users', (req,res) => {
    const {name,email} = req.body;
    if(!name || !email)
    {
        return res.status(400).json({error: 'Please provide both name and email.'});
    }

    const newUser = {id: users.length+1 , name: name, email:email};
    users.push(newUser);

    res.status(201).json({message: 'User created successfully.'});
})

app.put('/users', (req,res) => {
  const {id,name,email} = req.body;
  let user = users.find((u) => u.id == id);
  if(!user)
    return res.status(404).json("User not found");
  if (!name || !email) 
    return res.status(400).json({error: 'Please provide both name and email.'});
  user.name = name;
  user.email = email;

  res.json(user);
})
app.listen(3000, () => {
  console.log('Server is running on :3000');
}
);