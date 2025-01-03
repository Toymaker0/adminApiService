import sequelize_conn from "../Database/Db.js";
import HubsClass from "../DataManagement/Hub.class.js";
import hubsDetails from "../SeedData/Hubs/hubs.json";

const schemasList = [
    "route_management"
  ];
const SeedData = () => {
   
 
}
const excuteSeedlings=async()=>{
   // console.log(111);
    try {
        const schemas = await sequelize_conn.showAllSchemas();
        
        schemasList.forEach(async schema => {
          if (!schemas.includes(schema)) {
            await sequelize_conn.createSchema(schema);
          }
        });
       await sequelize_conn.sync({ alter: true });
    
        // const checkExtensionQuery = `SELECT * FROM pg_extension WHERE extname = 'pgrouting'`;
    
        // const result = await sequelize_conn.query(checkExtensionQuery, {
        //     type: sequelize_conn.QueryTypes.SELECT
        // });
    
        // if(!result.length){
        //   await sequelize_conn.query(`CREATE EXTENSION pgrouting`, { raw: true });
        // }
    
         seedDataIntoTables();
        // deleteTileData();
      } catch (err) {
        console.log(err);
        
      }
}
const seedDataIntoTables = async function () {
  const hubsClass = new HubsClass()
    
  try {
    let result = await hubsClass.getHubs();
    if (!result || !result.length) {
      await hubsClass.addBulkHubs(hubsDetails);
    }

  } catch (err) {
    console.log(err);
    
  }
};

export  {SeedData,excuteSeedlings}