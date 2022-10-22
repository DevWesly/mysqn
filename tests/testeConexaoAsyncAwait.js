const sequelize = require('sequelize');

const config = require('./config');

const conexao = new sequelize(config);

async  function levantarFuncionarios(){
    try {
        let resultado = await conexao.query("SELECT * FROM FUNCIONARIOS LIMIT 0,5");
        console.log(resultado);
        
        
    } catch (error) {
        console.log("Deu erro")
        
    }
    conexao.close();




   
}

levantarFuncionarios();