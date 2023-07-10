"use strict";

const sqlstring = require("sqlstring")
const mysqlHelper= require("../../helper/mysqlHelper");
(()=>{
module.exports= async(obj,uuid_user)=>{
    try {
        const sqlquery = sqlstring.format("update userinfos set uuid=?, userName= ?, password= ? ", [uuid_user.uuid, obj.userName, obj.password]);
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