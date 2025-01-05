import sequelize_conn from "../Database/Db.js";
import Sequelize from "sequelize";

const AreasModel = sequelize_conn.define('areas', {
    area_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    area_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
    },{ schema: "route_management"}
);

export default AreasModel