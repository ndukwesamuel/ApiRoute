const express = require('express')
const app = express()
const mongoose = require('mongoose');
const {Usermodel} = require('./models/User')
const router = require('./routes/userRoutes')
const Apirouter = require('./routes/PostApiRoutes')


const port = 8000

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}));


mongoose.connect('mongodb://localhost:27017/MRVDB')
.then( (result) => console.log('db connected'))
.catch((err) => console.log(err))


app.use('/', router)
app.use('/api/v2/', Apirouter)




app.listen( port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

} )

