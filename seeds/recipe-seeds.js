const {Recipes} = require('../models')

const recipeData = [
{   
    id: 1,
    recipe_name: "chicken", 
    recipe_instructions: "put in the oven", 
    category_id: 5, 
    ingredients: "Dough, flour, sauce, and cheese", 
    // user_id: 1 
},
{   
    id: 2,
    recipe_name: "chicken", 
    recipe_instructions: "put in the oven", 
    category_id: 1, 
    ingredients: "Dough, flour, sauce, and cheese", 
    // user_id: 1 
},
{   
    id: 3,
    recipe_name: "chicken", 
    recipe_instructions: "put in the oven", 
    category_id: 2, 
    ingredients: "Dough, flour, sauce, and cheese", 
    // user_id: 1 
},
{   
    id: 4,
    recipe_name: "chicken", 
    recipe_instructions: "put in the oven", 
    category_id: 3, 
    ingredients: "Dough, flour, sauce, and cheese", 
    // user_id: 1 
},
{   
    id: 5,
    recipe_name: "burger", 
    recipe_instructions: "put in the oven", 
    category_id: 5, 
    ingredients: "Dough, flour, sauce, and cheese", 
    // user_id: 1 
},

];


const seedRecipes = () => Recipes.bulkCreate(recipeData);

module.exports = seedRecipes;


