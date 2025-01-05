import sequelize_conn from "../Database/Db.js";
import Sequelize from "sequelize";


const HubStopsModel = sequelize_conn?.define('hub_stops', {
    hub_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // references: {
        //     model: { tableName: "hubs", schema:  "route_management"  },
        //     key: "hub_id",
        // },
    },
    stop_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // references: {
        //     model: { tableName: "stops", schema:  "route_management"  },
        //     key: "stop_id",
        // },
    }},{ schema: "route_management" }
);

export default HubStopsModel;