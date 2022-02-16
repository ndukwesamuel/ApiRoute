const express = require('express');
const router = express.Router();

const {
    
    GetAllUser,
    GetUser,
    GetCreateUSer,
    CreateUser,
    DeleteUser

} = require('../controller/userController')




router.get("/", GetAllUser)
// router.get("/details/:id/", GetUser)
// // router.get("/create", GetCreateUSer)
// // router.post("/create", CreateUser)
// router.delete("/details/:id/", DeleteUser)

router.route('/create').get(GetCreateUSer).post(CreateUser)
router.route('/details/:id/').get(GetUser).delete(DeleteUser)





module.exports = router