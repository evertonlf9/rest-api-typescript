require('babel-polyfill');

if(process.env.NODE_ENV !== 'PRODUCTION' ){
    require('dotenv').config();
}

import * as http from 'http';
import app from './app';
import * as iconvLite from 'iconv-lite';
import {sequelize} from './models';

async function dbInit(){
  await sequelize.sync();
}

if(process.env.NODE_ENV !== 'test'){
  dbInit();
}

iconvLite.encodingExists('foo');

process.on('SIGINT', () => {
    process.exit(0);
});

const IS_TEST: boolean = process.env.NODE_ENV === 'test';
const port: number = IS_TEST ? 3002 : 3005;
const server: http.Server = new http.Server(app);

server.listen(port, () => {
    if(! IS_TEST){
        console.log(`Listening at http://localhost:${port}/api/v1`);
    }
});

server.on('error', (error: any, port: number) => {
    if (error.syscall !== "listen") {
      throw error;
    }
    switch (error.code) {
      case 'EACCES':
        if(process.env.NODE_ENV !== 'test'){
          console.log(`${port} requires elevated privileges`);
        }
        process.exit(1);
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