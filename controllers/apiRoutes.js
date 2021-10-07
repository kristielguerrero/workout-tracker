const app = require('express').Router();
const db = require('../models');

router.get('/', async (req, res) => {
  db.Workout.find({}).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});

app.post('/api/workouts', (req, res) => {
  db.Workout.create(req.body).then((Workoutdb) => {
    res.json(Workoutdb);
  });
});

app.put('/api/workouts/:id', (req, res) => {
  db.Workout.update(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  ).then((workoutdb) => {
    re.json(workoutdb);
  });
});

module.exports = app;
