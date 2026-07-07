import express from "express";
import sequelize from "./config/database.js";
import "./models/index.js";

import logger from "./middlewares/logger.middleware.js";
import errorHandler from "./middlewares/error.middleware.js";

import arbitreRoutes from "./routes/arbitre.routes.js";
import matchRoutes from "./routes/match.routes.js";
import affectationRoutes from "./routes/affectation.routes.js";

const app = express();

app.use(express.json());

app.use(logger);

app.use("/arbitres", arbitreRoutes);
app.use("/matchs", matchRoutes);
app.use("/affectations", affectationRoutes);


app.use(errorHandler);


async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("DB connected");

    await sequelize.sync();
    console.log("Tables created");

    app.listen(1010, () => {
      console.log("Server running on port 1010");
    });

  } catch (err) {
    console.log("Error:", err.message);
  }
}

startServer();