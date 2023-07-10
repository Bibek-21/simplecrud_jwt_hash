"use strict";
const createuser = require('../sql/insertLogininfo');
// const helper = require("../../helper/index");
const { hashpassword } = require('../../helper/hashPassword');

(() => {
    module.exports = async (req, res, next) => {
        try {
             const passwordhash = await hashpassword(req.body.password)

            const obj = {
                userName: req.body.userName,
                password: passwordhash,
            };
            
            // const info = await helper.validationHelper.userinfo(obj);
        
                const content = await createuser(obj);
                if (content == true) {
                    res.status(200).send({
                        message: 'successfully created',
                        success: true
                    })
                }
                else {
                    res.status(400).send({
                        message: 'Could not create table',
                        success: false
                    })
                }
            

            
        } catch (error) {
            console.log(error);
        }
    }

})();