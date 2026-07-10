import express from "express";
import sequelize from "./config/database.js";
import "./models/index.js";

// import errorHandler from "./middlewares/error.middleware.js";

// import arbitreRoutes from "./routes/arbitre.route.js";
// import matchRoutes from "./routes/match.route.js";
// import affectationRoutes from "./routes/affrctation.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());

// app.use("/arbitres", arbitreRoutes);
// app.use("/matchs", matchRoutes);
// app.use("/affectations", affectationRoutes);
app.use("/auth", authRoutes);

// app.use(errorHandler);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("DB connected");

    await sequelize.sync();
    console.log("Tables created");
  } catch (err) {
    console.log("DB connection warning:", err.message);
  }

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

startServer();