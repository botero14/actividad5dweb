import {Request,Response,Application} from "express";
import {UserController} from "../controllers/users.controller";

export class UserRoute{
    public userController: UserController = new UserController();
    public routes(app: Application): void{
        app.route('/user').get(this.userController.getUsers);
        app.route('/createuser').get(this.userController.createUser);
    }
}