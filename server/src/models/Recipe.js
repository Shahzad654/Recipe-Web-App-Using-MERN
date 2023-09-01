const express = require('express')
const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true
    }],
    instructions: {
        type: String,
        required: true
    },
    imgaeURL:{
        type: String,
        required: true
    },
    cookingTime: {
        type: Number,
        required: true
    }

})

const RecipeModel = mongoose.model('recipes', RecipeSchema)

module.exports = RecipeModel