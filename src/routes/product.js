const controller = require('../controller/productController');

module.exports = app => {
    app.route('/produto').get(controller.findAll);
    app.route('/produto').post(controller.store);
}