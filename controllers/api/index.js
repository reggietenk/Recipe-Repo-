const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const CategoryRoutes = require('./category-routes');
const RecipeRoutes = require('./recipe-routes');
const CommentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/category', CategoryRoutes);
router.use('/recipes', RecipeRoutes);
router.use('/comments', CommentRoutes);


module.exports = router;