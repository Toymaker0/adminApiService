import sequelize_conn from "../Database/Db.js";
import Sequelize from "sequelize";

const StopsModel = sequelize_conn.define('stops', {
    stop_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stop_name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    stop_name_tamil: {
        type: Sequelize.STRING(100),
    },
    stop_category: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    stop_coordinates: {
        type: Sequelize.GEOMETRY('POINT', 4326),
        allowNull: false,
        //unique: true
    },
    stop_coordinates_rev: {
        type: Sequelize.GEOMETRY('POINT', 4326),
        //unique: true
    },
    area_id: {
        type: Sequelize.INTEGER,
        references: {
            model: { tableName: "areas", schema: "route_management"},
            key: "area_id",
        },
    }
  },{ schema: "route_management" }
);

export default StopsModel;