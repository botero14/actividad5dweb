import { MultaController } from "../controllers/multas.controller";
export class MultaRoute {
    constructor() {
        this.multaController = new MultaController();
    }
    routes(app) {
        app.route('/multamultaController').get(this.multaController.index);
    }
}
