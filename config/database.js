// import {Pool} from "pg" ;

//         const pool =  new Pool({
//             user :"postgres",
//             password:"adam",
//             host:"localhost",
//             database:"referee_db",
//             port:8002,
//         });
       

//     export default pool ;
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