import express, { urlencoded, json } from 'express';
import config from 'config';

import dbConnect from './startup/db.js';
import initializeRoutes from './api/routes.js';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

const port = process.env.PORT || config.get('port');

app.listen(() => {
    console.log(`listening on localhost:${port}`);

    dbConnect();

    initializeRoutes(app);
})