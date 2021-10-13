import { UserRoute } from "./user";
import { VehiculoRoute } from "./vehiculo";
import { AccidenteRoute } from "./accidente";
import { MultaRoute } from "./multa";
export class Routes {
    constructor() {
        this.userRoutes = new UserRoute();
        this.vehiculoRoutes = new VehiculoRoute();
        this.accidenteRoutes = new AccidenteRoute();
        this.multaRoutes = new MultaRoute();
    }
}
