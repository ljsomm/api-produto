const express = require('express');
require('dotenv').config();

module.exports = () =>{
    const app = express();
    require('./database');
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    require('./routes/product')(app);

    app.set('port', process.env.PORT || 8080);
    return app;
}