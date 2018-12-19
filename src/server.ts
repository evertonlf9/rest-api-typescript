require('babel-polyfill');

if(process.env.NODE_ENV !== 'PROSUCTION' ){
    require('dotenv').config();
}

import * as http from 'http';
import app from './app';
import * as iconvLite from 'iconv-lite';

iconvLite.encodingExists('foo');

process.on('SIGINT', () => {
    process.exit(0);
});

const IS_TEST: boolean = process.env.NODE_ENV === 'test';
const port: number = IS_TEST ? 3005 : 3001;
const server: http.Server = new http.Server(app);

server.listen(port, (error: any, port: number) => {

    if(error.syscall !== "listen"){
        throw error;
    }

    switch(error.code){
        case 'EACCES':
            if(process.env.NODE_ENV !== 'test'){
                console.log(`${port} riqueres elevated privileges`)
            }
            process.exit(0);
        case 'EADDRINUSE':
            if(process.env.NODE_ENV !== 'test'){
              console.log(`${port} is already in use`);
            }
            process.exit(1);
        default:
            throw error;
    }
});

export default server;