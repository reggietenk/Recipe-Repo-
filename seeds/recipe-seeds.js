const {Recipes} = require('../models')

const recipeData = [
{   
    id: 1,
    recipe_name: "Fish Pie", 
    recipe_instructions: "Mash with 1 tbsp olive oil, then season.\r\n02.Meanwhile put the milk in a large sauté pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes.", 
    category_id: 8, 
    ingredients: "Olive Oil, White Fish Fillets, Gruyère, and Parsley", 
},
{   
    id: 2,
    recipe_name: "Pancakes", 
    recipe_instructions: "Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.", 
    category_id: 13, 
    ingredients: "Sugar, Flour, Milk, and Eggs", 
},
{   
    id: 3,
    recipe_name: "Big Mac", 
    recipe_instructions: " Heat oil in a large frypan over high heat. In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through.", 
    category_id: 1, 
    ingredients: "Lettuce, Buns, Beef Patties, and Cheese", 
},
{   
    id: 4,
    recipe_name: "Dal Fry", 
    recipe_instructions: "Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.\r\nCook dal with 2-1/2 cups water and add salt.", 
    category_id: 11, 
    ingredients: "Turmeric, Chopped tomatoes, Green Chili, and Cilantro", 
},
{   
    id: 5,
    recipe_name: "Lasagna", 
    recipe_instructions: "Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.",
    category_id: 6, 
    ingredients: "Minced Beef, Basil Leaves, Tomato Puree, and Parmesan Cheese",  
},
{   
    id: 6,
    recipe_name: "Timbits", 
    recipe_instructions: "Sift together dry ingredients.\r\nMix together wet ingredients and incorporate into dry.",
    category_id: 3, 
    ingredients: "Baking Powder, Milk, Flour, and Oil", 
},
{
    id: 7,
    recipe_name: "Cajun Spiced Fish Tacos", 
    recipe_instructions: "Top with a zesty dressing and serve in a tortilla for a quick, fuss-free main that's delightfully summery. On a large plate, mix the cajun spice and cayenne pepper with a little seasoning and use to coat the fish all over.",
    category_id: 8, 
    ingredients: "Flour Tortilla, Garlic, White Fish, and Oil", 
},
{
    id: 8,
    recipe_name: "Salmon Avocado Salad", 
    recipe_instructions: "Season the salmon, then rub with oil. Mix the dressing ingredients together.Halve, stone, peel and slice the avocados.",
    category_id: 8, 
    ingredients: "Avocado, Salmon, Cucumber, and Spinach", 
},
{
    id: 9,
    recipe_name: "Lamb and Potato Pie", 
    recipe_instructions: "Dust the meat with flour to lightly coat. Heat enough vegetable oil in a large saucepan to fill the base, and fry the onion and meat until lightly browned. Season with salt and pepper. Add the carrots, stock and more seasoning to taste.",
    category_id: 4, 
    ingredients: "Lamb Shoulder, Onion, Potatoes, and Flour", 
},
{
    id: 10,
    recipe_name: "Kentucky Fried Chicken", 
    recipe_instructions: "Combine spice mix with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken. Repeat with all the chicken pieces.",
    category_id: 2, 
    ingredients: "Chili Powder, Flour, Chicken, and Frying Oil", 
},





];


const seedRecipes = () => Recipes.bulkCreate(recipeData);

module.exports = seedRecipes;


