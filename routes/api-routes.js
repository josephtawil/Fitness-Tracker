const express = require('express');
const router = express.Router();
const {getWorkout, newWorkout, addExercise} = require("../seeders/seed");

//getting workouts
router.get('/api/workouts', getWorkout);

router.get('/api/workouts/range', getWorkout)
// create workout
router.post("/api/workouts", newWorkout);

router.put("/api/workouts/:id", addExercise);

module.exports = router;