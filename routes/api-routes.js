const express = require('express');
const router = express.Router();
const {getWorkout, createWorkout, addExercise} = require("../seeders/seed");

//getting workouts
router.get('/api/workouts', getWorkout);

router.get('/api/workouts/range', getWorkout)
// create workout
router.post("/api/workouts", createWorkout);

router.put("/api/workouts/:id", addExercise);

module.exports = router;