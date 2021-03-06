var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./user');


//This part creates a new user

router.post('/', function (req, res) {
    User.create({
        namne: req.body.namne,
        email: req.body.email,
        password: req.body.password

    },
        function (err, user) {

            if (err) return res.status(500).send("There was a problem addin the information to the database.");
            res.status(200).send(user);
        });
    });

    //Returns the users in the database

    router.get('/', function (req, res) {

        User.find({}, function (err, users) {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(users);
        });
    });

module.exports = router;