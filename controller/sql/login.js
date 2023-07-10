"use strict";

const sqlstring = require("sqlstring")
const mysqlHelper= require("../../helper/mysqlHelper");
(()=>{
module.exports= async(obj,uuid_user,token)=>{
    try {
        const sqlquery = sqlstring.format("INSERT INTO logins (uuid, userName, password,token) VALUES (?, ?, ?,?)", [uuid_user.uuid, obj.userName, obj.password,token]);
const output = await mysqlHelper.query(sqlquery);

        if(output[0].affectedRows>0){
            return true

        }
        else{
            return false
        }
    } catch (error) {
       throw error;   
    }
}

})();