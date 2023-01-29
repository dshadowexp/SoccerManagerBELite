import authRoute from "./users/auth.js";
import usersRoute from "./users/routes.js";
import teamsRoute from "./teams/routes.js";
import playersRoute from "./players/routes.js"

const initializeRoutes = function(app) {
    app.use('/api/auth', authRoute);
    app.use('/api/users', usersRoute);
    app.use('/api/teams', teamsRoute);
    app.use('/api/players', playersRoute);
}

export default initializeRoutes;