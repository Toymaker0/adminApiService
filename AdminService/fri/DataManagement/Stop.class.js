import StopsModel from "../Model/Stops.model.js";

class StopClass {
    getStops(routeNo) {
        if (!routeNo) return StopsModel.findAll();
        return StopsModel.findAll({ where: { route_no: routeNo } });
    }
    addBulkStops(stopsDetails) {
        return StopsModel.bulkCreate(stopsDetails);
    }
    addStop(stopDetails) {
        return StopsModel.create(stopDetails);
    }
    editStop(stopDetails) {
        return StopsModel.update(stopDetails, { where: { stop_id: stopDetails.stop_id } });
    }
}
export default StopClass;