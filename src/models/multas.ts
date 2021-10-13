import {Model,DataTypes} from 'sequelize';
const Sequelize = require('sequelize')
import {database} from "../database/db"

export class Multa extends Sequelize.Model{
    public numeroReferencia!: number;
    public fecha!: string;
    public hora!: string;
    public lugar!: string;
    public importe!: number;
    
}

export interface UserI{
    numeroReferencia: number;
    fecha: string;
    hora: string;
    poblacion: string
    importe: number;
    
}

Multa.init(
    {
        numeroReferencia:{
            type:Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        fecha:{
            type:Sequelize.DataTypes.DATEONLY,
            allowNull: false
        },
        hora:{
            type:Sequelize.DataTypes.DATE(6),
            allowNull: false
        },
        lugar:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        },
        importe:{
            type:Sequelize.DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName:"multas",
        sequelize:database,
        timesstamps:true
    }
);