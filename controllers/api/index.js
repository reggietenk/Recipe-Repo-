const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const CategoryRoutes = require('./category-routes')

router.use('/users', userRoutes);
router.use('/category', CategoryRoutes)


module.exports = router;