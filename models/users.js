import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

const Users =sequelize("users",{
    id:{
        type:DataTypes.INTEGER,
        primarykey:true,
        autoIncrement:true
    },
    nom:{
        type:DataTypes.STRING,
        allowNull:true,
        },

        email:{
            type:DataTypes.STRING,
            allowNull:false

        },
        password:{
            type:DataTypes.STRING,
            allowNull:false

        },
        roles:{
            type:DataTypes.ENUM(
                "admin",
                "commissaire",
                " arbitre",
                " consultation"
            )
        }

} )