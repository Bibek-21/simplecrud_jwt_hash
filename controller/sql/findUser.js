"use strict";

const sqlstring = require("sqlstring")
const mysqlHelper= require("../../helper/mysqlHelper");
(()=>{
module.exports= async(name)=>{
    try {
        const sqlquery = sqlstring.format("select uuid  from userinfos where userName= ?", [name]);
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