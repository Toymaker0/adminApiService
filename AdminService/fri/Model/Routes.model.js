import sequelize_conn from "../Database/Db.js";
import Sequelize from "sequelize";

const RoutesModel = sequelize_conn.define('routes', {
    route_no: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    route_start_location: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    route_end_location: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    start_location_coordinates: {
        type: Sequelize.STRING(4326),
        allowNull: false
    },
    end_location_coordinates: {
        type: Sequelize.STRING(4326),
        allowNull: false
    },
    route_coordinates: {
        type: Sequelize.STRING(4326),
        //allowNull: false
    },
    route_total_stops: {
        type: Sequelize.INTEGER,
    }},
    { schema: "route_management" }
);

export default RoutesModel;