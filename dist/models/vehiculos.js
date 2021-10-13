const Sequelize = require('sequelize');
import { database } from "../database/db";
export class Vehiculo extends Sequelize.Model {
}
Vehiculo.init({
    matricula: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "vehiculos",
    sequelize: database,
    timesstamps: true
});
