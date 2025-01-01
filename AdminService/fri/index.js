import express from "express";
import sequelize_conn from "./Database/Db.js";

const app=express()

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(3000,()=>{
    console.log('serv running in 3000');
})