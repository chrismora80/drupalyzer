const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
      type: String,
      trim: true,
      required: "Enter type of workout"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter a name for workout"
    },
    duration: {
      type: Number,
      required: "Enter duration for workout"
    },
    distance: {
      type: Number
    },
    weight: {
      type: Number 
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    }
  });

  const Exercise = mongoose.model("Exercise", ExerciseSchema);
  
  module.exports = Exercise;