import {Request,Response,Application} from "express";
import {VehiculoController} from "../controllers/vehiculos.controller";

export class VehiculoRoute{
    public vehiculoController: VehiculoController = new VehiculoController();
    public routes(app: Application): void{
        app.route('/vehiculo').get(this.vehiculoController.index);
    }
}