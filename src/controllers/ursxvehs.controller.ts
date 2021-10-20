import {Request,Response} from "express"
import { where } from "sequelize";
import {Usrxveh,UsrxvehI} from "../models/usrcvehs"

export class UrsxvehController{
    public async getUrsxveh(res: Response, req: Request){
        try{
            const ursxveh = await Usrxveh.findAll();
            if (!ursxveh){
                res.status(400).json({msg:'user invalid'})
            }
            return res.status(200).json({ursxveh});
        }catch(error){
            res.status(400).json({msg:'Error internal'})
        }
    }
}