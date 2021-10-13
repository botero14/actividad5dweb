import {Request,Response} from "express"
import {Multa} from "../models/multas"

export class MultaController{
    public index(req: Request, res: Response){
        Multa.findAll({})
            .then((multas: Array<Multa>) => res.json(multas))
            .catch((err:Error) => res.status(500).json(err));
    }
}