const express =require('express')
const router = express.Router()
const db = require('../db/connect')


router.get('/reg',(req,res)=>{
    db.query('select * from `test`',{},(result,ab)=>{
        res.send(result)
    })
})



module.exports = router