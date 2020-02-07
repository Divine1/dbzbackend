const userService = require("./../service/user.service")
 




exports.login = (req,res)=>{
    console.log("in /login")
    res.send({status : "from login"})
}


exports.create = (req,res)=>{
    console.log("in /create")
    userService.createUser();
    res.send({status : "from create route"})
}

exports.fetchUsers = (req,res)=>{
    console.log("in /fetchUsers")
    userService.fetchUsers();
    res.send({status : "from fetchUsers route"})
}