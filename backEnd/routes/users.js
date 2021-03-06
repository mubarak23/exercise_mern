const router = require('express').Router();
let User = require('../model/userModel');

//get route for users
router.route('/')
.get((req, res) =>{

    User.find().then(users => res.status(200).json(users))
    .catch(error => res.status(401).json(`Error ${error}`));
});

router.route('/add_user')
.post((req, res) => {
    //return res.body;
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save().then(() => res.status(200).json({
        'message': 'New User Added',
        'data': newUser,
    }))
    .catch((err) => res.status(401).json(`error: ${err}`));
});

module.exports = router;