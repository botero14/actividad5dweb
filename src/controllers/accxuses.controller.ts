import {Request,Response} from "express"
import { where } from "sequelize";
import {Accxuse} from "../models/accxuses"

export class AccxuseController{
    // public index(req: Request, res: Response){
    //     User.findAll({})
    //      .then((users: Array<User>) => res.json(users))
    //         .catch((err:Error) => res.status(500).json(err));
    // }
    public async getAccxuses(res: Response, req: Request){
        try{
            const accxuses = await Accxuse.findAll();
            if (!accxuses){
                res.status(400).json({msg:'accxuse invalid'})
            }
            return res.status(200).json({accxuses});
        }catch(error){
            res.status(400).json({msg:'Error internal'})
        }
    }

}