import {Request,Response,Application} from "express";
import {UrsxvehController} from "../controllers/ursxvehs.controller";

export class UrsxvehRoute{
    public ursxvehController: UrsxvehController = new UrsxvehController();
    public routes(app: Application): void{
        app.route('/ursxveh').get(this.ursxvehController.getUrsxveh);
    }
}