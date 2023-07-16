const mongoose = require('mongoose')

const dbUri ='mongodb+srv://Admin:1212@cluster0.pt7jec7.mongodb.net/emplayee_db?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = ()=>{
   return mongoose.connect(dbUri)

}