const express = require('express');
const { sendEmail } = require('../services/EmailService');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const data1 = req.body;
        const data = await sendEmail(data1);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;