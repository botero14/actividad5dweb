import {Request,Response} from "express"
import {Accidente} from "../models/accidentes"

export class AccidenteController{
    public index(req: Request, res: Response){
        Accidente.findAll({})
            .then((accidentes: Array<Accidente>) => res.json(accidentes))
            .catch((err:Error) => res.status(500).json(err));
    }
}