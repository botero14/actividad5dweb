import { User } from "../models/users";
export class UserController {
    index(req, res) {
        User.findAll({})
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    }
}
