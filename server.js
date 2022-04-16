const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const port = 4000;
const UserRoutes = require('./Routes/user')
const server = express()

server.use(bodyparser.json());

server.get('/', (req, res)=>{
    res.send("Hello Farfour!");
})

server.use('/user', UserRoutes);


mongoose.connect("")
.then(result => {
    server.listen(port, () => {
        console.log(`server is running on port ${port}`);
    });
}).catch(error => {
    console.log(`server Error while trying to connect to DB ${error}`);
})

