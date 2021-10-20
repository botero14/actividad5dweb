import { UserController } from "../controllers/users.controller";
export class UserRoute {
    constructor() {
        this.userController = new UserController();
    }
    routes(app) {
        app.route('/user').get(this.userController.getUsers);
    }
}
