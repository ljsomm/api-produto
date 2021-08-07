const { Model, DataTypes } = require('sequelize');


class Produto extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            valor: DataTypes.DOUBLE,
            quantidade: DataTypes.INTEGER
        },
        {
            sequelize: connection,
            tableName: 'tb_produto'
        })
    }
}

module.exports = Produto;