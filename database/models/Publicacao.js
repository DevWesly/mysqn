module.exports = (sequelize, DataTypes) => {
    let publicacao = sequelize.define(
        "Publicacao", // Nome do model
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },

            texto: {
                type: DataTypes.STRING,
            },
            imagem: {
                type: DataTypes.STRING
            },
            usuarios_id: {
                type: DataTypes.INTEGER
            }

        }, {
            tableName: "publicacoes",



            timestamps: true,
            paranoid: false



        }
    )

    publicacao.associate = (models) => {
        publicacao.belongsTo(models.Usuario, {
            foreignKey: "usuarios_id",
            as: "usuario_id"
        });



        publicacao.belongsToMany(models.Usuario,  {
            through: "curtidas", //<= nome da tabela de ligação
            foreignKey: "publicacoes_id", // <= a coluna que guarda o id da publicação
            otherKey: "usuarios_id", //coluna da table auxiliar que tem o id da model que esta se relacionando,
            as: "curtidores",
            timestamps: false
        })

    }


    return publicacao
}