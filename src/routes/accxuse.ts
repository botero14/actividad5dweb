import {Request,Response,Application} from "express";
import {AccxuseController} from "../controllers/accxuses.controller";

export class AccxuseRoute{
    public accxuseController: AccxuseController = new AccxuseController();
    public routes(app: Application): void{
        app.route('/accxuse').get(this.accxuseController.getAccxuses);
    }
}