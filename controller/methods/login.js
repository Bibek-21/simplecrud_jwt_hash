

"use strict";
const login_user = require('../sql/login');
const findUser= require("../sql/findUser");



(() => {
    module.exports = async (req, res, next) => {
        try {
            const jWT = require("jsonwebtoken");
            const dotenv = require("dotenv");
            dotenv.config();


            const obj = {
                userName: req.body.userName,
                password: req.body.password,
            };
            const token = jWT.sign({obj},process.env.JWT_SECRET_KEY,{expiresIn:'300s'});

            const user_uuid= await findUser(obj.userName);
            // const info = await helper.validationHelper.userinfo(obj);
        
                const content = await login_user(obj,user_uuid[0][0],token);

                if (content == true) {
                    res.status(200).send({
                        message: 'successfully Logged In',
                        success: true,
                        token: token
                    })
                }
                else {
                    res.status(400).send({
                        message: 'Could not Log In',
                        success: false
                    })
                }
            

            
        } catch (error) {
            console.log(error);
        }
    }

})();