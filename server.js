const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.send('hello world')
})

mongoose.connect('mongodb://localhost/todo-assignment')
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})