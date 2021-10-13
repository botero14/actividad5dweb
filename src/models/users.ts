import {Model,DataTypes} from 'sequelize';
const Sequelize = require('sequelize')
import {database} from "../database/db"

export class User extends Sequelize.Model{
    public nombre!: string;
    public apellido!: string;
    public direccion!: string;
    public poblacion!: string;
    public telefono!: string;
    public cedula!: string;
}

export interface UserI{
    nombre: string;
    apellido: string;
    direccion: string;
    poblacion: string
    telefono: string;
    cedula: string;
}

User.init(
    {
        nombre:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        },
        apellido:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        },
        direccion:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        },
        poblacion:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        },
        telefono:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        },
        cedula:{
            type:Sequelize.DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName:"users",
        sequelize:database,
        timesstamps:true
    }
);