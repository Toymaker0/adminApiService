import { Op } from "sequelize";
import HubsModel from "../Model/Hubs.model.js";
import HubStopsModel from "../Model/HubsStop.model.js";

class Hubs {
  //hubs
  getHubs(){
    return HubsModel.findAll();
  }
  addBulkHubs(hubsDetails){
    return HubsModel.bulkCreate(hubsDetails);
  }  
  //hubs stops
  getHubStops(){
    return HubStopsModel.findAll();
  }
  addBulkHubStops(hubStopsDetails){
    return HubStopsModel.bulkCreate(hubStopsDetails);
  } 
  }

  export default Hubs;