import express from "express";
import welcome_route from "./controller/welcome-controller";
import dog_controller from "./controller/v1/dogs-controller";

const app = express();
const port = 8080;

// Default route
app.use(welcome_route);
app.use(dog_controller);

app.listen( port, () => {
    // console.log("Server is now listening port " + port);
});