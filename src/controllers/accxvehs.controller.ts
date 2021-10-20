import {Request,Response} from "express"
import { where } from "sequelize";
import {Accxveh,AccxvehI} from "../models/accxvehs"

export class AccxvehController{
    
    public async getAccxvehs(res: Response, req: Request){
        try{
            const accxveh = await Accxveh.findAll();
            if (!accxveh){
                res.status(400).json({msg:'accxveh invalid'})
            }
            return res.status(200).json({accxveh});
        }catch(error){
            res.status(400).json({msg:'Error internal'})
        }
    }

}