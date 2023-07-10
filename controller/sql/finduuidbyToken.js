
"use strict";

const sqlstring = require("sqlstring")
const mysqlHelper= require("../../helper/mysqlHelper");
(()=>{
    module.exports= async(token)=>{
    try {
        const sqlquery = sqlstring.format("select uuid  from logins where token= ?", [token]);
const user_uuid = await mysqlHelper.query(sqlquery);


        if(user_uuid){
            return user_uuid;

        }
        else{
            return false;
        }
    } catch (error) {
       throw error;   
    }
}


})();