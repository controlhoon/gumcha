const LoginFailError = require("../util/error").LoginFailError;
const userModel = require("../models/User");


exports.checkLogin = (req,res,next) => {
    if(!req.user) {
        return res.send({data:{},error: LoginFailError});
    } else {
        return res.send({data:{}});
    }
}