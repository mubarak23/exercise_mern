const router = require('express').Router();
const User = require('../model/userModel');

//get route for users
router.route('/')
.get((req, res) =>{
    User.find().then(users => res.status(200).json(users))
    .catch(error => res.status(401).json(`Error ${error}`));
});

router.route('/add_user')
.post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save().then(() => req.status(200).json('New User Added'))
    .catch((err) => res.status(401).json(`error: ${err}`));
});