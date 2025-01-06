import express from "express";
import sequelize_conn from "./Database/Db.js";
import { excuteSeedlings } from "./SeedData/SeedData.js";
import StopClass from "./DataManagement/Stop.class.js";

const app = express()
app.use(express.json());
const stopClass=new StopClass();

setTimeout(() => {
    sequelize_conn.authenticate()
        .then(() => {
            console.log("Database successfully connected");
            excuteSeedlings()
        })
        .catch((err) => {
            console.log("Error connecting to the database:", err);
        });
}, 3000);

app.post('/addStop', async(req, res) => {
    console.log(req.body);
    try {
        const A= await stopClass.addStop(req.body) 
        console.log(A);
        
        res.send(A);
    } catch (error) {
        console.log(error);
        
    }
})
app.post('/editStop', async(req, res) => {
    console.log(req.body);
    try {
        const A= await stopClass.editStop(req.body) 
        console.log(A);
        
        res.send(A);
    } catch (error) {
        console.log(error);
        
    }
})

try {
    app.listen(3000, () => {
        console.log('serv running in 3000');
    })
} catch (error) {
    console.log(error);
}
