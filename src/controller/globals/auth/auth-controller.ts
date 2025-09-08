import { Request, Response } from "express"
import User from "../../../database/models/user-model";

const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({
                message: "All fields(username, password, email) are required"
            });
        return
        }
        await User.create({
            username: username,
            email: email,
            password: password
        })
        res.status(200).json({
            message: "User registered successfully"
        })
}
class AuthController {
    registerUser = async (req: Request, res: Response) => {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({
                message: "All fields(username, password, email) are required"
            });
        return
        }
        await User.create({
            username: username,
            email: email,
            password: password
        })
        res.status(200).json({
            message: "User registered successfully"
        })
    }
}

export {registerUser};

