import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const User =sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nom:{
        type:DataTypes.STRING,
        allowNull:false,
        },

        email:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false

        },
        password:{
            type:DataTypes.STRING,
            allowNull:false

        },
        role:{
            type:DataTypes.ENUM(
                "admin",
                "commissaire",
                "arbitre",
                "consultation"
            ),
            allowNull:false
        },
      

} )
export default User