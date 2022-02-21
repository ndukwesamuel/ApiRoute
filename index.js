const express = require('express')
const app = express()
const mongoose = require('mongoose');
const {Usermodel} = require('./models/User')
const router = require('./routes/userRoutes')
const Apirouter = require('./routes/PostApiRoutes')
const errorHandler = require('./middelware/errorHandler')
const {Goal} = require('./models/goalsModels')


const port = 8000

app.set('view engine', 'ejs');
app.use(express.json())  // this is becuse i want to create or posyt with json
app.use(express.urlencoded({extended:true}));


mongoose.connect('mongodb://localhost:27017/MRVDB')
.then( (result) => console.log('db connected'))
.catch((err) => console.log(err))


app.use('/', router)
app.use('/api/v2/', Apirouter)

// app.get('/test', (req, res) => {

//     const blog = new Goal({
//       name: 'new blog 2'

//     })
//         blog.save()
//       .then(result => {
//         res.render('index',{data:result} )
//       })
//       .catch(err => {
//         console.log(err);
//       });

// })

app.use(errorHandler)




app.listen( port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

} )

