import authRoute from './users/auth.js';
import usersRoute from './users/routes.js';

const initializeRoutes = function(app) {
    app.use('/api/auth', authRoute);
    app.use('/api/users', usersRoute);
}

export default initializeRoutes;