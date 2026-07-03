import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";




const Affectation = sequelize.define("Affectation",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autolncrement:true,
    },
    arbitreId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    matchId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM(
             "central",
              "assistant",
               "VAR",
               " AVAR",
                 "4e"
        ),
        allowNull:false
    }




})
export default Affectation;