import express from "express";
import HomeController from "../controller/HomeController";
const routes = express.Router();


const initWebRoutes = (app) => {
    routes.get("/", HomeController.Handle_Home);
    routes.get("/user", HomeController.Handle_User);
    routes.get("/signup", HomeController.Handle_Sign_up);
    routes.post("/create_user", HomeController.Handle_Create_User);
    routes.post("/delete_user/:id", HomeController.Handle_delete);
    // routes.get("/store", HomeController.Handle_Store);

    return app.use("/", routes);
}
// module.exports = {
//     initWebRoutes
// }
export default initWebRoutes;