import { Meal } from '../models/meal.js'


function newMeal(req, res) {
  Meal.find({}, function(err, meals) {
  res.render('meals/new', {
    title: 'Meals',
    meals
    })
  })
}

function create(req, res) {
  Meal.create(req.body, function(error, meal) {
    console.log(meal)
    res.redirect('/meals/new')
  })
}

export {
  newMeal as new,
  create
}