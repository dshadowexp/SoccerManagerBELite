import userRouter from './users/routes.js';
import authRouter from './users/auth.js';

const initializeRoutes = function(app) {
    app.use('/api/auth', authRouter);
    app.use('/api/users', userRouter);
}

export default initializeRoutes;