"use strict";

(() => {
    const express = require("express");
    const router = express.Router();
    const user = require('./insertuser');

    router.use('/user', user);
    
    module.exports = router;
})();