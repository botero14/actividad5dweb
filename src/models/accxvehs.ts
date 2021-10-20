import {Model,DataTypes} from 'sequelize';
const Sequelize = require('sequelize')
import {database} from "../database/db"
import {Vehiculo} from './vehiculos'
import {Accidente} from './accidentes'

export class Accxveh extends Sequelize.Model{
    
}

export interface AccxvehI{
    
}

Accxveh.init(
    {
        
    },
    {
        tableName:"accxveh",
        sequelize:database,
        timesstamps:true
    }
);

Vehiculo.hasMany(Accxveh);
Accxveh.belongsTo(Vehiculo);

Accidente.hasMany(Accxveh);
Accxveh.belongsTo(Accidente);