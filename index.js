const express = require ('express') // import express
const cors = require('cors') // import cors
const mongoose = require ('mongoose') //import mongoose
require('dotenv/config') //import dotenv library to use variable


const app = express ()
app.use (express.json())
app.use (cors())

mongoose
   .connect(process.env.DB_CONNECTION,{
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false
   })
   .then(() => app.listen(5000,(req,res) => {  //connecting to port 
    console.log('10-4 Houston')
}))
   .catch (err => console.log (err))

   app.get('/' , (req,res) => {
       res.send('we have a response')
   })

   const countryRoute = require('./src/routes/countriesroute')
   app.use(countryRoute)
   
