import {Request,Response} from "express"
import { where } from "sequelize";
import {User,UserI} from "../models/users"

export class UserController{
    // public index(req: Request, res: Response){
    //     User.findAll({})
    //      .then((users: Array<User>) => res.json(users))
    //         .catch((err:Error) => res.status(500).json(err));
    // }
    public async getUsers(res: Response, req: Request){
        try{
            const users = await User.findAll();
            if (!users){
                res.status(400).json({msg:'user invalid'})
            }
            return res.status(200).json({users});
        }catch(error){
            res.status(400).json({msg:'Error internal'})
        }
    }

    public async createUser(res: Response, req: Request){
        const body: UserI = req.body;
        try{
            if((!body.nombre && !body.apellido && !body.direccion && 
                !body.poblacion && !body.telefono && !body.cedula)) return res.status(400).json({msg:'some data is requiered'})
                const userExist: User | null = await User.findOnde(
                    {
                        where: {cedula: body.cedula},
                    }
            );
            if(userExist){
                return res.status(400).json({msg:'Ya existe'})
            }
            const user = await User.create(body);
            res.status(200).json({user })
        }catch(error){
          
        }
    }
}