import ServiceAreasModel from "../Model/ServiceArea.model.js";

class ServiceAreaClass {
    getServiceAreas() {
        return ServiceAreasModel.findAll();
    }
    addBulkServiceAreas(serviceAreasDetails) {
        return ServiceAreasModel.bulkCreate(serviceAreasDetails);
    }

}

export default ServiceAreaClass