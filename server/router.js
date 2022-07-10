const express = require('express');
const router = express.Router(); // import router from express

router.get('/', (req, res) => { // get request from route
    res.send("Server is up and running");
});

module.exports = router;