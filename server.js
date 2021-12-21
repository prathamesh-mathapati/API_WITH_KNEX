const express=require('express')
const app=express()
app.use(express.json())
const router=require('./router/router')
app.use(router)
app.listen(5000,(req,res)=>{
    console.log('data listen')
})