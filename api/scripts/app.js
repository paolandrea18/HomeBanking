const express = require("express");
require("../api/node_modules/dotenv/types").config();
const app = express();

const routeUser = require("../routes/user");

app.use("/user", routeUser);

app.listen(process.env.PORT, () => {
  console.log(`Server on port ${process.env.PORT}`);
});
