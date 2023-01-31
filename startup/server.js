import express, { json, urlencoded } from 'express';
import helmet from 'helmet';

import initializeRoutes from '../api/routes.js';

export default function() {
    const app = express();

    app.use(helmet());
    app.use(json());
    app.use(urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        res.send('Welcome to Soccer Manager BELite')
    })

    initializeRoutes(app);

    return app;
}