"use strict";
const express = require("express");
const router = express.Router();

(() => {
    const login_user = require("../controller/methods/login");
    const create_user = require("../controller/methods/insertLogininfo")


    router.post("/createuser", create_user);
    router.post("/loginuser", login_user)


    module.exports = router;
})();