import sequelize_conn from "../Database/Db";
import Sequelize from "sequelize";

const Hubs = sequelize_conn.define('hubs', {
    hub_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hub_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    hub_name_tamil: {
        type: Sequelize.STRING(255),
    },
    hub_coordinates: {
        type: Sequelize.GEOMETRY('POINT', 4326),
        allowNull: false,
        unique: true
    },
    },{ schema: "route_management"}
);

export default Hubs;