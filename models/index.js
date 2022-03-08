const User = require('./User');
const Categories = require('./Categories');
const Recipes = require('./Recipes');
const Comments = require('./Comment');


//User Relationships to Recipes
User.hasMany(Recipes, {
    foreignKey: 'user_id'
})

Recipes.belongsTo(User, {
    foreignKey: 'user_id'
})

//need to allow users to save a recipe to their dashboard of favorite recipes

// Recipes.belongsToMany(User, {
//     // through: Comment,  
//     foreignKey: 'user_id'
// })

//Category Relationships
Recipes.belongsTo(Categories, {
    foreignKey: 'id_category'
});

Categories.hasMany(Recipes, {
    foreignKey: 'id_category'
});

// Comment-User relationship
Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
  });
  
// Comment-Recipes relationship
Comments.belongsTo(Recipes, {
    foreignKey: 'recipe_id',
    onDelete: 'cascade',
    hooks: true
});
  
// User-Comment relationsihp
User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});
  
// Post-Comment relationship
Recipes.hasMany(Comments, {
    foreignKey: 'recipe_id',
    onDelete: 'cascade',
    hooks:true
})

module.exports = { User, Categories, Recipes, Comments };