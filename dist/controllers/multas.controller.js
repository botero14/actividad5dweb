import { Multa } from "../models/multas";
export class MultaController {
    index(req, res) {
        Multa.findAll({})
            .then((multas) => res.json(multas))
            .catch((err) => res.status(500).json(err));
    }
}
