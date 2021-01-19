import express from "express";
import welcome_route from "./controller/welcome-controller";

const app = express();
const port = 8080;

// Default route
app.use(welcome_route);

app.listen( port, () => {
    // console.log("Server is now listening port " + port);
});