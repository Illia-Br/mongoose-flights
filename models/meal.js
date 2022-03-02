import mongoose from "mongoose"


const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: String
})

const Meal = mongoose.Model('Meal', mealSchema)

export {
  Meal
}