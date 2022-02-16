const express = require('express');
const Apirouter = express.Router();
const {
    
    GetAllGoals,
    GetGoals,
    SetGoals,
    UpdateGoal,
    DeleteGoal


} = require('../controller/PostApiController')


Apirouter.get("/", GetAllGoals)

Apirouter.get("/:id/", GetGoals)
// // router.get("/create", GetCreateUSer)
Apirouter.post("/", SetGoals)

Apirouter.patch("/:id/", UpdateGoal)
Apirouter.delete("/:id/", DeleteGoal)



// router.delete("/details/:id/", DeleteUser)

// router.route('/create').get(GetCreateUSer).post(CreateUser)
// router.route('/details/:id/').get(GetUser).delete(DeleteUser)



module.exports = Apirouter