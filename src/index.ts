import express from "express";
import welcome_route from "./controller/welcome-controller";
import dog_controller from "./controller/v1/dog-controller";
import user_controller from "./controller/v1/user-controller";

const app = express();
const port = 8080;

// HTTP Request body parser
app.use(express.json());

// Default route
app.use(welcome_route);
app.use(dog_controller);
app.use(user_controller);

app.listen( port, () => {
    // console.log("Server is now listening port " + port);
});