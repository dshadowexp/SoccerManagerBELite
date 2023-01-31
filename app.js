import config from 'config';

import createServer from "./startup/server.js";
import dbConnect from './startup/db.js';
import swaggerDocs from './startup/swagger.js';

const app = createServer();
const PORT = process.env.PORT || config.get('port');

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}...`);

    dbConnect();
    
    swaggerDocs(app, PORT);
})