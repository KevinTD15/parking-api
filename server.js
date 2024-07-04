const express = require("express");
const cookie_parser = require('cookie-parser');
const {connect_mysql} = require('./database');
const {router} = require('./routes');
const {server_config} = require('./config');

export class Server{
    app;

    constructor(){
        this.app = express();
        connect_mysql();
        this.config();
        this.middlewares();
        this.routes();
    }

    config(){
        //this.app.set('port', PORT);
    }

    middlewares(){
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
        this.app.use(cookie_parser());
    }

    routes(){
        this.app.use('/', router);
    }

    //TODO poner bien el puerto
    listen(){
        this.app.listen('8080', () => {
            console.log(`Server is running at port: ${8080}`);
        });
    }
}