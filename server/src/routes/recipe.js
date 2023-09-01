const express = require('express')
const mongoose = require('mongoose')
const recipeRouter = express.Router()
const RecipeModel = require('../models/Recipe')

recipeRouter.get('/', async(req,res)=>{
    const response = await RecipeModel.find({})
    res.json(response)

})

recipeRouter.post('/recipe', async(req,res)=>{
    const recipe = new RecipeModel(req.body)
    await recipe.save()
    res.json(recipe)

})



module.exports = recipeRouter
