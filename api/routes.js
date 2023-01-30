import usersRoute from "./users/routes.js";
import teamsRoute from "./teams/routes.js";
import playersRoute from "./players/routes.js";
import transfersRoute from "./transfers/routes.js";
import error from "../middleware/error.js";

const initializeRoutes = function(app) {
    app.use('/api/users', usersRoute);
    app.use('/api/teams', teamsRoute);
    app.use('/api/players', playersRoute);
    app.use('/api/transfers', transfersRoute);
    app.use(error);
}

export default initializeRoutes;