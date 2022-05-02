const express = require("express");
const app = express();
const cors = require("cors")
const port = 3077;

const configureDb = require("./config/database");
const router = require("./config/routers");

configureDb();

app.use(express.json());
app.use(cors())
app.use(router);

app.listen(port, () => {
   console.log("server listening to port", port);
});
