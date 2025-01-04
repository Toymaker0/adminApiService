import { Sequelize } from "sequelize";


const sequelize_conn = new Sequelize('management', 'postgres', '123', {
    host: 'host.docker.internal', //need to connect inside the docker
    port: 5432,//not necessery
    dialect: 'postgres' 
  });

export default sequelize_conn