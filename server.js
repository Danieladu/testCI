const express =require('express')
const app =express()
const apiRouter=express.Router()

app.listen(3001,function(){
    console.log('express server rnning at 3001')
})

module.exports=apiRouter
const router=require('./user.js')
app.use('/api',router)