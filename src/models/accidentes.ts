import {Model,DataTypes} from 'sequelize';
const Sequelize = require('sequelize')
import {database} from "../database/db"

export class Accidente extends Sequelize.Model{
    public numeroReferencia!: string;
    public fecha!: number;
    public lugar!: string;
    public hora!: string;
    
}

export interface UserI{
    numeroReferencia: number;
    fecha: string;
    lugar: string;
    hora: string
    
}

Accidente.init(
    {
        numeroReferencia:{
            type:Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        fecha:{
            type:Sequelize.DataTypes.DATEONLY,
            allowNull: false
        },
        lugar:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        },
        hora:{
            type:Sequelize.DataTypes.DATE(6),
            allowNull: false
        }
    },
    {
        tableName:"accidentes",
        sequelize:database,
        timesstamps:true
    }
);