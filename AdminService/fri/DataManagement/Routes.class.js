import AreasModel from "../Model/Area.model.js";
import RoutesModel from "../Model/Routes.model.js";
import RouteStopsModel from "../Model/RoutesStop.model.js";


class RoutesClass {
  //routes
  getRoutes() {
    return RoutesModel.findAll();
  }
  addBulkRoutes(routesDetails) {
    return RoutesModel.bulkCreate(routesDetails);
  }
  //routes Stop
  getRouteStops() {
    return RouteStopsModel.findAll();
  }
  addBulkRouteStops(routeStopsDetails) {
    return RouteStopsModel.bulkCreate(routeStopsDetails);
  }
  //Areas
  getAllAreas() {
    return AreasModel.findAll();
  }
  addBulkAreas(areaDetails) {
    return AreasModel.bulkCreate(areaDetails);
  }
}

export default RoutesClass;