import sequelize_conn from "../Database/Db.js";
import Sequelize from "sequelize";

const ServiceAreasModel = sequelize_conn.define('service_areas', {
    service_area_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    service_area_name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    service_area_coordinates: {
        type: Sequelize.GEOMETRY('POLYGON', 4326),
        allowNull: false
    }},
    { schema: "route_management" }
);

export default ServiceAreasModel;