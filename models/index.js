const User = require('./User');
const Categories = require('./Categories')
const Recipes = require('./Recipes')


//User Relationships to Recipes
User.hasMany(Recipes, {
    foreignKey: 'user_id'
})

Recipes.belongsTo(User, {
    foreignKey: 'user_id'
})

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


// //Comment Relationships
// Comment.belongsTo(User, {
//     foreignKey: 'user_id'
// });
  
// Comment.belongsTo(Recipes, {
//     foreignKey: 'post_id'
// });
  
// User.hasMany(Comment, {
//     foreignKey: 'user_id'
// });
  
// Recipes.hasMany(Comment, {
//     foreignKey: 'post_id'
// });


module.exports = { User, Categories, Recipes };