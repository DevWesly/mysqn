const { Publicacao,sequelize} = require("../database/models");
Publicacao.findByPk(2,{include:["usuario_id","curtidores"]}).then(
    data=>{
        console.log(data.toJSON());
        sequelize.close();
    }
);