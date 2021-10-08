const router = require('express').Router();
const db = require('../models');

router.get('/api/workouts', async (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      console.log(dbWorkout), res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
});

router.post('/api/workouts', (req, res) => {
  workouts.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  workouts.Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  ).then((workoutdb) => {
    re.json(workoutdb);
  });
});

module.exports = router;
