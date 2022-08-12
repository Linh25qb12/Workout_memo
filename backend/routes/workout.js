const express = require('express');
const {createWorkout, getSingleWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controller/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//require auth for all workouts
router.use(requireAuth);

router.get('/', getWorkouts );

router.get('/:id', getSingleWorkout);

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);

module.exports = router;
