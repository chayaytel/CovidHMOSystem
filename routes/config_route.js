const members = require("./members");
const covid = require("./covid");


exports.routesInit = (app) => {
    app.use("/members",members);
    
    app.use("/covid",covid);

}