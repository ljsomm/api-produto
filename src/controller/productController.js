const Produto = require("../models/Product");

module.exports = {
    async store(req, res){
        const r = await Produto.create({
            nome: req.body.name,
            valor: req.body.value,
            quantidade: req.body.quantity
        });
        res.json(r);
    },

    async findAll(req, res){
        const r = await Produto.findAll();
        res.json(r);
    }
}