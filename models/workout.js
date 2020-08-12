const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({

    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
});


const workoutSchema = new Schema({

    day: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    totalDuration: {
        type: Number,
        default: 0,
      },
    exercises: [exerciseSchema],

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;