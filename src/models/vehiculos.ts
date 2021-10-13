import {Model,DataTypes} from 'sequelize';
const Sequelize = require('sequelize')
import {database} from "../database/db"

export class Vehiculo extends Sequelize.Model{
    public matricula!: string;
    public marca!: string;
    public modelo!: string;
   
}

export interface VehiculoI{
    matricula: string;
    marca: string;
    modelo: string;
   
}

Vehiculo.init(
    {
        matricula:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        },
        marca:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        },
        modelo:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName:"vehiculos",
        sequelize:database,
        timesstamps:true
    }
);