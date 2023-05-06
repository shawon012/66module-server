const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users =[
    {id: 1, name: 'sabana', email:'sabana@gmail.com'},
    {id: 2, name: 'shabnoor', email:'shabnoor@gmail.com'},
    {id: 3, name: 'sabila', email: 'sabila@gmail.com'}
]

app.get('/', (req, res) =>{
    res.send('User Management server is running');
})

app.get('/users', (req, res) =>{
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () =>{
    console.log(`Server is running on PORT: ${port}`)
})


// echo "# 66module-server" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/shawon012/66module-server.git
// git push -u origin main