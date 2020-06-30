const express = require('express');

const router = express.Router();

router.get('/sign-in', (req, res) => {
    return res.json("Sign in");
});


router.get('/sign-up', (req, res) => {
    return res.json("Sign up, ciao");
});

module.exports = router;