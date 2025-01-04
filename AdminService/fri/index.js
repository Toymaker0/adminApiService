import express from "express";
import sequelize_conn from "./Database/Db.js";
import {excuteSeedlings} from "./SeedData/SeedData.js";

const app=express()

setTimeout(() => {
    sequelize_conn.authenticate()
        .then(() => {
            console.log("Database successfully connected");
            excuteSeedlings()
        })
        .catch((err) => {
            console.log("Error connecting to the database:", err);
        });
  }, 2000);

app.get('/',(req,res)=>{
    res.send('hello')
})
try {
    app.listen(3000,()=>{
        console.log('serv running in 3000');
    })  
} catch (error) {
    console.log(error);
}
