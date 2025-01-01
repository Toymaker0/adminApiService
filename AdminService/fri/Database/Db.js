import { Sequelize } from "sequelize";


// const sequelize_conn=new Sequelize(
//   process.env.PG_DB,
//   process.env.PG_USER,
//   process.env.PG_PASSWORD,
//     {
//         host :'localhost',
//         dialect:'postgres'  
//     }
// )
const sequelize_conn = new Sequelize('postgres', 'postgres', '123', {
    host: 'host.docker.internal', //need to connect inside the docker
    port: 5432,//not necessery
    dialect: 'postgres' 
  });

setTimeout(() => {
  sequelize_conn.authenticate()
      .then(() => {
          console.log("Database successfully connected");
          
      })
      .catch((err) => {
          console.log("Error connecting to the database:", err);
      });
}, 5000);

export default sequelize_conn