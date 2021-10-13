import { Vehiculo } from "../models/vehiculos";
export class VehiculoController {
    index(req, res) {
        Vehiculo.findAll({})
            .then((vehiculos) => res.json(vehiculos))
            .catch((err) => res.status(500).json(err));
    }
}
