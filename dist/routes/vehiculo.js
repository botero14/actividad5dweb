import { VehiculoController } from "../controllers/vehiculos.controller";
export class VehiculoRoute {
    constructor() {
        this.vehiculoController = new VehiculoController();
    }
    routes(app) {
        app.route('/vehiculo').get(this.vehiculoController.index);
    }
}
