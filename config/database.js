
import { Sequelize } from "sequelize";
const sequelize = new Sequelize( 
    "referee_db",
    "postgres",
    "adam",{host: "localhost",
    dialect:"postgres",
   port:1010,

   
})
sequelize.authenticate()
  .then(() => console.log("DB CONNECTED ✅"))
  .catch(err => console.log(err.message));
export default sequelize ;