const express = require("express");
const cors = require("cors");

require("./db/mongoConnect");

const {routesInit} = require("./routes/config_route");

const app = express();

app.use(cors());//access for the domains
app.use(express.json());//data to json

routesInit(app);

app.listen(3000, () => {
    console.log("Server started on port 3000")
 })