import {Model,DataTypes} from 'sequelize';
const Sequelize = require('sequelize')
import {database} from "../database/db"
import {User} from './users'
import {Accidente} from './accidentes'

export class Accxuse extends Sequelize.Model{
   
}

export interface AccxuseI{
    
}

Accxuse.init(
    {
        
    },
    {
        tableName:"accxuses",
        sequelize:database,
        timesstamps:true
    }
);

User.hasMany(Accxuse);
Accxuse.belongsTo(User);

Accidente.hasMany(Accxuse);
Accxuse.belongsTo(Accidente);