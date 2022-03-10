const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipes, User, Comments, Categories } = require('../models');

// get all recipes for homepage
router.get('/', (req, res) => {
  console.log('req.session');
  Recipes.findAll({
    attributes: [
      'id',
      'recipe_name',
      'recipe_instructions',
      'category_id',
      'ingredients',
      'created_at'
    ],
    include: [
      {
        model: Comments,
        attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbRecipeData => {
      const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
    
      res.render('homepage', { 
        recipes,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/recipes/:id', (req, res) => {
  Recipes.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'recipe_name',
      'recipe_instructions',
      'ingredients',
      'created_at'
    ],
    include: [
      {
        model: Comments,
        attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbRecipeData => {
    if (!dbRecipeData) {
      res.status(404).json({ message: 'No recipe found with this id' });
      return;
    }

    // serialize the data
    const recipe = dbRecipeData.get({ plain: true });

    // pass data to template
    res.render('single-recipe', { 
      recipe,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
   

router.get('/categories', (req,res) => {
  Categories.findAll({
    attributes: [
      'id_category',
      'str_category',
      'str_category_thumb',
      'str_category_description',
    ]
  })
    .then(dbCategoryData => {

      const categories = dbCategoryData.map(category => category.get({ plain: true }));
      // pass a single post object into the homepage template
      res.render('categories', { 
        categories,
        loggedIn: req.session.loggedIn
       });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;