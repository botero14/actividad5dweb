import {Request,Response} from "express"
import {Vehiculo} from "../models/vehiculos"

export class VehiculoController{
    public index(req: Request, res: Response){
        Vehiculo.findAll({})
            .then((vehiculos: Array<Vehiculo>) => res.json(vehiculos))
            .catch((err:Error) => res.status(500).json(err));
    }
}