const express = require('express');
const router = express.Router();
const User = require('./models/user-schema');
var jwt = require('jsonwebtoken')
const JWT = require('./middleware/JWT');
const asyncMiddleware = require('./middleware/asyncMiddleware');

router.post('/register', asyncMiddleware(async (req, res, next) => {
    let userData = req.body;
    let user = await new User(userData);
    console.log('1', user)
    user.save((err, registeredUser) => {
        if (err) {
            console.log(err)
        } else {
            let payload = {subject: registeredUser._id};
            console.log('payload', payload)
            let token = jwt.sign(payload, 'secretKey');
            console.log('token', token)
            res.status(200).send({token})
        }
        })
    })
);

router.post('/login', asyncMiddleware(async (req, res, next) => {
    let userData = req.body;
    await User.findOne({email: userData.email}, (err, user) => {
        if (err) {
            console.log(err)
        } else {
            if (!user) {
                res.status(401).send('Invalid Username')
            } else if (user.password !== userData.password) {
                console.log(userData.password)
                res.status(401).send('Invalid Password')
            } else {
                let payload = {subject: user._id}
                console.log(payload, 'payload')
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
            }
        })
    })
);


module.exports = router;