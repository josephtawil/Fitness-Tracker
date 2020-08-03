const express = require('express');
const router = express.Router();
const {getWorkout} = require("../seeders/seed");


router.get('/api/workouts', getWorkout);

module.exports = router;