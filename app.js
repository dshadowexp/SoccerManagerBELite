import express, { json, urlencoded } from 'express';
import config from 'config';

import dbConnect from './startup/db.js';
import initializeRoutes from './api/routes.js';
import swaggerDocs from './startup/swagger.js';

const app = express();

app.use(json())
app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Welcome to Soccer Manager BELite')
})

const PORT = process.env.PORT || config.get('port');

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}...`);

    dbConnect();
    initializeRoutes(app);
    swaggerDocs(app, PORT);
})

export default app;