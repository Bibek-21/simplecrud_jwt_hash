

"use strict";
const uuidbyToken= require("../sql/finduuidbyToken");
const update_user = require('../sql/updateUser');



(() => {
    module.exports = async (req, res, next) => {
        try {
         


            const obj = {
                userName: req.body.userName,
                password: req.body.password,
                token: req.headers.authorization
            };

            const user_uuid= await uuidbyToken(obj.token);
        
                const content = await update_user(obj,user_uuid[0][0]);

                if (content == true) {
                    res.status(200).send({
                        message: 'successfully updated',
                        success: true,
                        token: obj.token
                    })
                }
                else {
                    res.status(400).send({
                        message: 'Could not update',
                        success: false
                    })
                }
            

            
        } catch (error) {
            console.log(error);
        }
    }

})();