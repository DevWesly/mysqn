const sequelize = require('sequelize');
// const {sequelize} = require('../database/models')

const config = require("./config");
const conexão = new sequelize(config); 
let promise = conexão.query("SELECT * FROM funcionarios LIMIT 0,3");

promise.then(
    data=>{
        console.log(data)
        conexão.close();
    }
);

console.log(promise);

