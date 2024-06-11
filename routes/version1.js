const express = require('express');


// invoking the router method
const router = express.Router();

// importing controllers
let { getChats } = require('../controllers/version1')

router.route('/get-chats').get(getChats);


// exporting the router
module.exports = router