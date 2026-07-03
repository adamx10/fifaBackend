import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";




const Matchs = sequelize.define("match",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autolncrement:true
    },
    equipeDomicile:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    equipeExterieur:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    stade:{
        type:DataTypes.STRING,
        allowNull:false
    },
    villeHote:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    dateMatch:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    phase:{
        type:DataTypes.ENUM(
            "Groupes",
             "8e",
              "4e",
              " demi",
               " finale"
        )
    }

})
export default Matchs;