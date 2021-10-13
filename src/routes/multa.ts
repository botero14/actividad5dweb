import {Request,Response,Application} from "express";
import {MultaController} from "../controllers/multas.controller";

export class MultaRoute{
    public multaController: MultaController = new MultaController();
    public routes(app: Application): void{
        app.route('/multamultaController').get(this.multaController.index);
    }
}