const Sequelize = require('sequelize');

const DB_NAME = 'db_multas';
const DB_USER = 'root';
const DB_PASS = 'Pan123456'

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host:'localhost',
        dialect:'mysql',
        port:'3306'  
    }
);

database.sync({force:true})
    .then(function(){
        console.log("Base de datos creada.")
    });

