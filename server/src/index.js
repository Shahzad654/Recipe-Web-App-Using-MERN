const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/users')
const recipeRouter = require('./routes/recipe')

mongoose.connect('mongodb://127.0.0.1:27017/Recipe')

app.use(express.json())
app.use(cors())

app.use('/auth', userRouter)
app.use('/recipes', recipeRouter)

app.listen(3001, ()=>{
    console.log("Server Started!")
})