import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as passport from 'passport';
import * as cors from 'cors';
import * as compression from 'compression';
import * as fs from 'fs';

import httpRouter from './router';
import ap from 'ramda/es/ap';
const app: express.Application = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(compression());
app.use(logger('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(logger('dev'));

//we will use cors middleware for enabling cores and for all requests
//you can read more about cors here:
//https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
const corsMiddleware = cors({origin: '*', preflightContinue: true})
app.use(corsMiddleware);
app.options('*', corsMiddleware);

const appServer: express.Application = app;

export default appServer;