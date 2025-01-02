import { Sequelize } from "sequelize";
import { excuteSeedlings } from "../SeedData/SeedData.js";


const sequelize_conn = new Sequelize('management', 'postgres', '123', {
    host: 'host.docker.internal', //need to connect inside the docker
    port: 5432,//not necessery
    dialect: 'postgres' 
  });

setTimeout(() => {
  sequelize_conn.authenticate()
      .then(() => {
          console.log("Database successfully connected");
          excuteSeedlings()
      })
      .catch((err) => {
          console.log("Error connecting to the database:", err);
      });
}, 5000);

export default sequelize_conn