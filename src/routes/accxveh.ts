import {Request,Response,Application} from "express";
import {AccxvehController} from "../controllers/accxvehs.controller";

export class AccxvechRoute{
    public userController: AccxvehController = new AccxvehController();
    public routes(app: Application): void{
        app.route('/user').get(this.userController.getAccxvehs);
    }
}