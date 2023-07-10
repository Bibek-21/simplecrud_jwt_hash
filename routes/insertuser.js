"use strict";
const express = require("express");
const router = express.Router();

(() => {
    const login_user = require("../controller/methods/login");
    const create_user = require("../controller/methods/insertLogininfo");
    const update_user = require("../controller/methods/updateUser")


    router.post("/createuser", create_user);
    router.post("/loginuser", login_user);
    router.put("/updateuser",update_user);


    module.exports = router;
})();