import sequelize_conn from "../Database/Db.js";
import HubsClass from "../DataManagement/Hub.class.js";
import RoutesClass from "../DataManagement/Routes.class.js";
import Hubs from "../Model/Hubs.model.js";
import HubStops from "../Model/HubsStop.model.js";
import Routes from "../Model/Routes.model.js";
import hubsData from "../SeedData/Hubs/hubs.js" ;
import hubsStopData from "./Hubs/hubsStop.js";

const schemasList = [
    "route_management"
  ];
const SeedData = () => {
   
 
}
const excuteSeedlings=async()=>{
    try {
        const schemas = await sequelize_conn.showAllSchemas();
        
        schemasList.forEach(async schema => {
          if (!schemas.includes(schema)) {
            await sequelize_conn.createSchema(schema);
          }
        });
      //await sequelize_conn.sync({ alter: true });
    
         seedDataIntoTables();
      } catch (err) {
        console.log(err);
        
      }
}
const seedDataIntoTables = async function () {
  const hubsClass = new HubsClass()
  const routesClass = new RoutesClass()
    
  try {
    //hubs
    await Hubs.sync({ force: true });
    let result = await hubsClass.getHubs();
    if (!result || !result.length) {
      await hubsClass.addBulkHubs(hubsData);
    }
    //hubs stops
    await HubStops.sync({ force: true });
    result = await hubsClass.getHubStops();
    if (!result || !result.length) {
      await hubsClass.addBulkHubStops(hubsStopData);
    }
    //route
    await Routes.sync({ force: true });
     result = await routesClass.getRoutes();
    if (!result || !result.length) {
     // await RoutesClass.addBulkRoutes(routesData);
    }
  } catch (err) {
    console.log(err);
  }
};

export  {SeedData,excuteSeedlings}