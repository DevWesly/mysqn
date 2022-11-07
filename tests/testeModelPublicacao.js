const { Publicacao,sequelize} = require("../database/models");
Publicacao.findByPk(33,{include:["usuario_id","curtidores"]}).then(
    data=>{
        console.log(data.toJSON());
        sequelize.close();
    }
);