const express = require('express')
const UserModel = require('../models/User')
const userRouter = express.Router()

userRouter.post('/reg', async(req,res)=>{
    const {username, password} = req.body
    const user = await UserModel.findOne({username})
    

    if(user){
        return res.json({message: 'User already exists!'})
    }

    const newUser = new UserModel({username, password})
    await newUser.save()

    res.json({message: 'User Registered Successfully!'})

})

userRouter.post('/login', async(req,res)=>{
    const {username, password} = req.body
    const user = await UserModel.findOne({username})
    if(user){
        if(user.password===password){
            res.json('Success')
        }
        else{
            res.json('Incorrect username or password')
        }
    }

})

module.exports = userRouter

