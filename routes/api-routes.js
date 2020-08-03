const express = require('express');
const router = express.Router();
const {getWorkout, createWorkout} = require("../seeders/seed");

//getting workouts
router.get('/api/workouts', getWorkout);
// create workout
router.post("/api/workouts", createWorkout);


module.exports = router;