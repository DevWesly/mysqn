//importar o sequelize

const sequelize = require("sequelize");

//elencar os dados para conexão com BD(usuario, senha, porta, endereço...)
const config = {
    "username":"root",
    "password":"",
    "host":"localhost",
    "port":"3306",
    "dialect":"mysql",
    "database":"escola"
}

//Criar a conexão com o banco de dados

const conexao = new sequelize(config);


//levantando alunos do BD (SELECT * from alunos);

const promiseAlunos = conexao.query(
    'SELECT * from alunos',
    sequelize.QueryTypes.SELECT
);

//Levantar as turmas do BD;
const promiseTurmas = conexao.query(
    "SELECT * from turmas",
    sequelize.QueryTypes.SELECT
);

//criando uma promise em que todas as promises forem cumpridas

const promiseTotal = Promise.all([promiseAlunos,promiseTurmas]);

promiseTotal.then(
    (dados)=> {
        console.log(dados[0],dados[1]);
        conexao.close();
    } 
);