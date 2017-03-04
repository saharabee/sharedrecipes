'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');
var recipes = require('../controllers/recipes');



/* GET home page. */
router.get('/:id', recipes.getRecipeById);
router.get('/', recipes.getRecipes);


module.exports = router;
