const {Recipes} = require('../models')

const recipeData = [
{   
    id: 1,
    recipe_name: "Fish Pie", 
    recipe_instructions: "Mash with 1 tbsp olive oil, then season.\r\n02.Meanwhile put the milk in a large sauté pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes.", 
    category_id: 3, 
    ingredients: "Olive Oil, White Fish Fillets, Gruyère, and Parsley", 
    str_meal_thumb: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
    // user_id: 1 
},
{   
    id: 2,
    recipe_name: "Pancakes", 
    recipe_instructions: "Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.", 
    category_id: 1, 
    ingredients: "Sugar, Flour, Milk, and Eggs", 
    // user_id: 1 
},
{   
    id: 3,
    recipe_name: "Big Mac", 
    recipe_instructions: " Heat oil in a large frypan over high heat. In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through.", 
    category_id: 2, 
    ingredients: "Lettuce, Buns, Beef Patties, and Cheese", 
    // user_id: 1 
},
{   
    id: 4,
    recipe_name: "Dal Fry", 
    recipe_instructions: "Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.\r\nCook dal with 2-1/2 cups water and add salt.", 
    category_id: 3, 
    ingredients: "Turmeric, Chopped tomatoes, Green Chili, and Cilantro", 
    // user_id: 1 
},
{   
    id: 5,
    recipe_name: "Lasagna", 
    recipe_instructions: "Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.",
    category_id: 5, 
    ingredients: "Minced Beef, Basil Leaves, Tomato Puree, and Parmesan Cheese", 
    // user_id: 1 
},
{   
    id: 6,
    recipe_name: "Timbits", 
    recipe_instructions: "Sift together dry ingredients.\r\nMix together wet ingredients and incorporate into dry.",
    category_id: 5, 
    ingredients: "Baking Powder, Milk, Flour, and Oil", 
    // user_id: 1 
},

];


const seedRecipes = () => Recipes.bulkCreate(recipeData);

module.exports = seedRecipes;


