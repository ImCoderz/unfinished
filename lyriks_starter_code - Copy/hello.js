const express=require('express')
const app=express()
const mysql=require('mysql')
const bodyParcel=require('body-parser')
const cors=require('cors')
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    connectionLimit:10,
    insecureAuth : true
})
app.use(bodyParcel.urlencoded({extended:true}))
app.use(cors());
app.use(express.json())

app.listen(3001,()=>{
    console.log('ruuuuun');
})

app.get('/api/get',(req,res)=>{
    db.query(`select * from hollywood.film`,(err, result)=>{
        if(err) return err;
        res.send(result)
    })
})
