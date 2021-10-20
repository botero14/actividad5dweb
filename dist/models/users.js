const Sequelize = require('sequelize');
import { database } from "../database/db";
import { Multa } from './multas';
export class User extends Sequelize.Model {
}
User.init({
    nombre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    poblacion: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    cedula: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "users",
    sequelize: database,
    timesstamps: true
});
User.hasMany(Multa);
Multa.belongsTo(User);
