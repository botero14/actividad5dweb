import { Accidente } from "../models/accidentes";
export class AccidenteController {
    index(req, res) {
        Accidente.findAll({})
            .then((accidentes) => res.json(accidentes))
            .catch((err) => res.status(500).json(err));
    }
}
