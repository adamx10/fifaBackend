// import express from "express";
// import sequelize from "./config/database.js";

// const app = express();

// app.use(express.json());

// async function start() {
//   try {
//     await sequelize.authenticate();
//     console.log("✅ DB connected");

//     app.listen(3000, () => {
//       console.log(" server on");
//     });

//   } catch (err) {
//     console.log(" DB error:", err.message);
//   }
// }

// start();
import express from "express";
import sequelize from "./config/database.js";

const app = express();
app.use(express.json());

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("DB connected");

    await sequelize.sync();
    console.log("Tables created");

    app.listen(1010, () => {
      console.log("Server running");
    });

  } catch (err) {
    console.log("Error:", err.message);
  }
}

startServer();