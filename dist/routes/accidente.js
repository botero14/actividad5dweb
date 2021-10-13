import { AccidenteController } from "../controllers/accidentes.controller";
export class AccidenteRoute {
    constructor() {
        this.accidenteController = new AccidenteController();
    }
    routes(app) {
        app.route('/accidente').get(this.accidenteController.index);
    }
}
