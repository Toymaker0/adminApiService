import sequelize_conn from "../Database/Db.js";
import Sequelize from "sequelize";

const RouteStopsModel = sequelize_conn.define('route_stops', {
    stop_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // references: {
        //     model: { tableName: "stops", schema: "route_management" },
        //     key: "stop_id",
        // },
    },
    route_no: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        // references: {
        //     model: { tableName: "routes", schema: "route_management" },
        //     key: "route_no",
        // },
    },
    sequence_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    distance: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    },{ schema: "route_management" }
);

export default RouteStopsModel;