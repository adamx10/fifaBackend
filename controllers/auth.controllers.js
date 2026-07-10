import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {
    async register(req, res) {
        try {
            const { name, email, password, role } = req.body;

            if (!name || !email || !password || !role) {
                return res.status(400).json({ message: "Missing required fields" });
            }

            const existingUser = await User.findOne({ where: { email } });

            if (existingUser) {
                return res.status(400).json({ message: "email deja utilisé" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                nom: name,
                email,
                password: hashedPassword,
                role,
            });

            const { password: _, ...userData } = user.toJSON();
            return res.status(201).json({ message: "User created", user: userData });
        } catch (err) {
            return res.status(500).json({ message: err.message || "Server error" });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
            }

            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email, role: user.role },
                process.env.JWT_SECRET || "secret",
                { expiresIn: "1h" }
            );

            return res.status(200).json({
                message: "Login successful",
                token,
                user: {
                    id: user.id,
                    name: user.nom,
                    email: user.email,
                    role: user.role,
                },
            });
        } catch (err) {
            return res.status(500).json({ message: err.message || "Server error" });
        }
    }
}

export const authController = new AuthController();

