import { User } from "../models/users";
import { Vehiculo } from "../models/vehiculos";
import { Accidente } from "../models/accidentes";
import { Multa } from "../models/multas";
import {UserRoute} from "./user";
import {VehiculoRoute} from "./vehiculo";
import {AccidenteRoute} from "./accidente";
import {MultaRoute} from "./multa";
import {UrsxvehRoute} from "./ursxveh";
import {AccxuseRoute} from "./accxuse";
import {AccxvechRoute} from "./accxveh";

export class Routes{
    public userRoutes : UserRoute = new UserRoute();
    public vehiculoRoutes : VehiculoRoute = new VehiculoRoute();
    public accidenteRoutes : AccidenteRoute = new AccidenteRoute();
    public multaRoutes : MultaRoute = new MultaRoute();
    public usrxvehRoutes : UrsxvehRoute = new UrsxvehRoute();
    public accxuseRoutes : AccxuseRoute = new AccxuseRoute();
    public accxvehRoutes : AccxvechRoute = new AccxvechRoute();
}