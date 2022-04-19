const express = require('express')
const router = express()
const {createUser} = require('../models/userModel')
// router.get('/register', async(req,res)=>{
//     res.send('hellow')
// })

router.post('/register', async (req,res)=>{
    const {username, password} = req.body
    console.log(req.body);
    const value = createUser({username, password})
    res.json(value)
})

module.exports = router