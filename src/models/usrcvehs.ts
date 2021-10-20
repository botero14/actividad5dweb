import {Model,DataTypes} from 'sequelize';
const Sequelize = require('sequelize')
import {database} from "../database/db"
import {User} from './users'
import {Vehiculo} from './vehiculos'

export class Usrxveh extends Sequelize.Model{
   
}

export interface UsrxvehI{
  
}

Usrxveh.init(
    {
        
    },
    {
        tableName:"usrxveh",
        sequelize:database,
        timesstamps:true
    }
);

User.hasMany(Usrxveh);
Usrxveh.belongsTo(User);

Vehiculo.hasMany(Usrxveh);
Usrxveh.belongsTo(Vehiculo);