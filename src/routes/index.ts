import { User } from "../models/users";
import { Vehiculo } from "../models/vehiculos";
import { Accidente } from "../models/accidentes";
import { Multa } from "../models/multas";
import {UserRoute} from "./user";
import {VehiculoRoute} from "./vehiculo";
import {AccidenteRoute} from "./accidente";
import {MultaRoute} from "./multa";

export class Routes{
    public userRoutes : UserRoute = new UserRoute();
    public vehiculoRoutes : VehiculoRoute = new VehiculoRoute();
    public accidenteRoutes : AccidenteRoute = new AccidenteRoute();
    public multaRoutes : MultaRoute = new MultaRoute();
}