import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const User =sequelize("users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nom:{
        type:DataTypes.STRING,
        allowNull:true,
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
            )
        }

} )