const express = require('express')
const app =  express()
const user = require('./router/user')
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/user',user)



app.listen('3000',(res)=>{
    console.log('启动成功！')
})