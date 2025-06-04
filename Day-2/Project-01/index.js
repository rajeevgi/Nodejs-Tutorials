const express = require('express');
const fs = require('fs');
const app = express();
const Port = 3000;

// Read Data from json file 
const data = JSON.parse(fs.readFileSync('./USERS_DATA.json', 'utf-8'));
const users = data.users;

// Middlware
app.use(express.json())

// API's
// Get All Users
app.get('/api/users/getAllUsers', (req, res) => {
    res.json(users);
});

// Get Users By Id
app.get('/api/users/getUserById/:id', (req, res) => {
    const { id } = req.params;
    const getUser = users.find((user) => user.id === parseInt(id));
    res.json(getUser);
});

// Add Users
app.post('/api/users/addUsers', (req, res) => {
    const { id, first_name, last_name, gender, age } = req.body;
    const newUser = { id, first_name, last_name, gender, age };
    users.push(newUser);
    fs.writeFile('./USERS_DATA.json', JSON.stringify({users}, null, 2), (err) => {
        if(err) return res.status(500).json({ message : "Something went wrong!" });

        res.status(201).json({ message : "User Added..", newUser });
    })
});

// Update Users
app.put('/api/users/updateUserById/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === parseInt(id));

    if(index === -1){
        return res.status(404).json({ message : "User not found!" });
    }
    const { first_name, last_name, gender, age } = req.body;
    users[index] = {
        ...users[index],
        first_name,
        last_name,
        gender,
        age
    }
    fs.writeFile('./USERS_DATA.json', JSON.stringify({ users}, null, 2), (err) => {
        if(err) return res.status(500).json({ message : "Something went wrong!" });

        res.status(200).json({ message : "User Updated Sucessfully..", user: users[index] });
    });
})

// Delete Users
app.delete('/api/users/deleteUserById/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === parseInt(id));

    if(index === -1){
        return res.status(404).json({ message : "User not found!" });
    }
    const deletedUser = users.splice(index, 1);

    fs.writeFile('./USERS_DATA.json', JSON.stringify({ users }, null, 2), (err) => {
        if (err) return res.status(500).json({ message : "Something went wrong!" });

        res.status(201).json({ message : "User deleted Successfully...", deletedUser});
    })
});

// Run The Server
app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
})