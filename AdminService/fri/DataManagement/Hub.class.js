import { Op } from "sequelize";
import HubsModel from "../Model/Hubs.model.js";
import HubStopsModel from "../Model/HubStops.model.js";

class Hubs {

    getHub(hubId) {
      if(!hubId) throw { message: "provide the hub id number" }
      
      return HubsModel.findOne({where: {hub_id: hubId}});
    }
  
    getHubs(){
      return HubsModel.findAll({where: {hub_id :{[Op.in]: ['10','12', '7', '9', '4', '13', '14', '15', '16', '17']}}});
      //return HubsModel.findAll({where: {hub_id :{[Op.in]: ['10','12', '7', '9']}}});
    }
  
    addBulkHubs(hubsDetails){
      return HubsModel.bulkCreate(hubsDetails);
    }  
  
    getHubStops(){
      return HubStopsModel.findAll();
    }
  
    addBulkHubStops(hubStopsDetails){
      return HubStopsModel.bulkCreate(hubStopsDetails);
    }  
  
  }

  export default Hubs;