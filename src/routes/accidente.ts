import {Request,Response,Application} from "express";
import {AccidenteController} from "../controllers/accidentes.controller";

export class AccidenteRoute{
    public accidenteController: AccidenteController = new AccidenteController();
    public routes(app: Application): void{
        app.route('/accidente').get(this.accidenteController.index);
    }
}