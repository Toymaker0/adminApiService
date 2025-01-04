import RoutesModel from "../Model/Routes.model.js";


class RoutesClass{
    getRoutes(){
        return RoutesModel.findAll();
      }
      addBulkRoutes(routesDetails){
        return RoutesModel.bulkCreate(routesDetails);
      }
}

export default RoutesClass;