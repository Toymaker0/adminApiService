import sequelize_conn from "../Database/Db.js";
import HubsClass from "../DataManagement/Hub.class.js";
import RoutesClass from "../DataManagement/Routes.class.js";
import ServiceAreaClass from "../DataManagement/ServiceArea.class.js";
import StopClass from "../DataManagement/Stop.class.js";
import stop from "../DataManagement/Stop.class.js";
import AreasModel from "../Model/Area.model.js";
import HubsModel from "../Model/Hubs.model.js";
import HubStopsModel from "../Model/HubsStop.model.js";
import RoutesModel from "../Model/Routes.model.js";
import RouteStopsModel from "../Model/RoutesStop.model.js";
import ServiceAreasModel from "../Model/ServiceArea.model.js";
import StopsModel from "../Model/Stops.model.js";
import hubsData from "../SeedData/Hubs/hubs.js";
import AreaData from "./Areas/Area.js";
import serviceAreaData from "./Areas/ServiceArea.js";
import hubsStopData from "./Hubs/hubsStop.js";
import routesData from "./Rooutes/Routes.js";
import F1L1R1 from "./Stop/F1L1R1.js";
import F1L1R2 from "./Stop/F1L1R2.js";
import L1R1 from "./Stop/L1R1.js";
import L1R2 from "./Stop/L1R2.js";
import L1R3 from "./Stop/L1R3.js";
import L1R4 from "./Stop/L1R4.js";
import L1R5 from "./Stop/L1R5.js";
import stopsData from "./Stop/stops.js";

const schemasList = [
  "route_management"
];
const SeedData = () => {


}
const excuteSeedlings = async () => {
  try {
    const schemas = await sequelize_conn.showAllSchemas();

    schemasList.forEach(async schema => {
      if (!schemas.includes(schema)) {
        await sequelize_conn.createSchema(schema);
      }
    });
    await sequelize_conn.sync({ alter: true });
 
    seedDataIntoTables();
  } catch (err) {
    console.log(err);

  }
}
const seedDataIntoTables = async function () {
  const hubsClass = new HubsClass()
  const routesClass = new RoutesClass()
  const serviceAreaClass = new ServiceAreaClass()
  const stopClass = new StopClass()

  try {
    //hubs
    await HubsModel.sync({ alter: true });
    let result = await hubsClass.getHubs();
    if (!result || !result.length) {
      await hubsClass.addBulkHubs(hubsData);
    }
    //hubs stops
    await HubStopsModel.sync({ alter: true });
    result = await hubsClass.getHubStops();
    if (!result || !result.length) {
      await hubsClass.addBulkHubStops(hubsStopData);
    }
    //route
    await RoutesModel.sync({ alter: true });
    result = await routesClass.getRoutes();
    if (!result || !result.length) {
      await routesClass.addBulkRoutes(routesData);
    }
    //routeStop
    await RouteStopsModel.sync({ alter: true });
    result = await routesClass.getRouteStops();
    if (!result || !result.length) {
      await routesClass.addBulkRouteStops([...L1R1, ...L1R2, ...L1R3, ...L1R4, ...L1R5, ...F1L1R1, ...F1L1R2]);
    }
    //areas
    await AreasModel.sync({ alter: true });
    result = await routesClass.getAllAreas();
    if (!result || !result.length) {
      await routesClass.addBulkAreas(AreaData);
    }
    //serviceArea
    await ServiceAreasModel.sync({ alter: true });
    result = await serviceAreaClass.getServiceAreas();
    if (!result || !result.length) {
      await serviceAreaClass.addBulkServiceAreas(serviceAreaData)
    }
    //stops
    await StopsModel.sync({ alter: true });
    result = await stopClass.getStops();
    if (!result || !result.length) {
      await stopClass.addBulkStops(stopsData);
    }
  } catch (err) {
    console.log(err);
  }
};

export { SeedData, excuteSeedlings }