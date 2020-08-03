const express = require('express');
const router = express.Router();
const {getWorkout} = require("../seeders/seed");

//getting workouts
router.get('/api/workouts', getWorkout);

module.exports = router;