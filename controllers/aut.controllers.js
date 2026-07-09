import User from "../models/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {
    async register (req,res){
        try{
            const {name,email,password,role}=req.body;
            const  existingUser = await User.findOne({
                where : {email}
            });
        
        if(existingUser){
            return res.status(400).json({
                message:"email deja utiliser"
            });
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            nom ,
            email, 
            password :hashedPassword ,
            role ,
        });
        const {password:_,...userData}= user.toJSON();
        return res.status()
    }}
}




