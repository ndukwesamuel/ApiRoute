
const {Usermodel} = require('../models/User')



const GetAllUser =  (req, res) => {

    Usermodel.find().sort({createdAt:-1})
    .then( (data) => {
        res.render('index', {data:data})
    })

}

const GetUser =  (req, res ) => {
    const id = req.params.id
    Usermodel.findById(id)
    .then( (data) => {
        res.render('details', {data:data})
    })
}


const GetCreateUSer =  (req, res) => {
    res.render('create')
}

const CreateUser = (req, res) => {

    console.log(req.body);
    const data = new Usermodel(req.body)
    data.save()
    .then(result => {
        res.redirect('/');
    })
    .catch(err => console.log(err))
    console.log('create');
}


const DeleteUser = (req, res ) => {
    const id = req.params.id

    Usermodel.findByIdAndDelete(id)
    .then( (data) => {
        res.json({redirect: '/'})
    })
    .catch(err => {
        console.log(err);
    })
}



module.exports = {
    GetAllUser,
    GetUser,
    GetCreateUSer,
    CreateUser,
    DeleteUser
}