const {
    Usuario
} = require('../database/models');
const {
    Op
} = require('sequelize');

module.exports = {
    registrar: (req, res) => {
        res.send("foi")

    },
    buscar: async (req, res) => {
        //capturar trecho que foi buscado
        let pesquisa = req.query.q

        //carregar os usuarios que correspondem oa trecho buscado

        let usuarios = await Usuario.findAll({
            where: {
                nome:{[Op.substring]:pesquisa}
            }
        });

        //enviar para a view os usuarios carregados


        res.send(usuarios);
    }
}