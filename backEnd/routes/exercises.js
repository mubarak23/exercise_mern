const router = require('express').Router();
let Exercise = require('../model/exerciseModel');

//get exercise route
router.route('/')
.get((req, res) =>{
    Exercise.find().then(exercise => res.status(200).json({
        message: "exercise list",
        data: exercise
    })).catch((error) => res.status(400).json(`Error: ${error}`));
});

router.route('/add_exercise')
.post((req, res) =>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });
    newExercise.save().then(() => res.status(200).json('Exercise Added'))
    .catch((error) => res.status(401).json(`Error: ${error}`));
});

router.route('/:id').get((req, res) =>{
    Exercise.findById(req.params.id)
    .then(exercise => res.status(200).json(exercise))
    .catch(error => res.status(401).json(`Error : ${error}`));
})

Router.route('./:id').delete((req, res) =>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json('Exercise Deleted'))
    .catch(error => res.status(402).json(`Error : ${error}`));
});

router.route('/update/:id')
.post((req, res) =>{
    Exercise.findById(req.params.id)
    .then(exercise =>{
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = Date.parse(req.body.date);
        exercise.save()
        .then(() =>res.status(200),json('Exercise Updated'))
        .catch(error => res.status(402).json(`Error: ${error}`));
    })
    .catch(error => res.status(402).json(`Error: ${error}`));
});


module.exports = router;