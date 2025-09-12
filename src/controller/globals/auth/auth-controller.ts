import { Request, Response } from "express"
import User from "../../../database/models/user-model";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// const registerUser = async (req: Request, res: Response) => {
//     const { username, email, password } = req.body;
//         if (!username || !email || !password) {
//             res.status(400).json({
//                 message: "All fields(username, password, email) are required"
//             });
//         return
//         }
//         await User.create({
//             username: username,
//             email: email,
//             password: password
//         })
//         res.status(200).json({
//             message: "User registered successfully"
//         })
// }
class AuthController {
    static registerUser = async (req: Request, res: Response) => {
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
            password: bcrypt.hashSync(password,12)
        })
        res.status(201).json({
            message: "User registered successfully"
        })
    }
}

class AuthController2  {
    static loginUser = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                message: "All fields(email, password) are required"
            });
        return
        }
        const data = await User.findAll({
            where : {
                email : email
            }
        })
        if(data.length== 0){
            res.status(404).json({
                messege : "not registered"
            })
        }else{
            const isPasswordMatch = bcrypt.compareSync(password,data[0].password)
            if(isPasswordMatch){
                const token = jwt.sign(
                    {id : data[0].id},"thissecrectkey",{
                        expiresIn : "2d"
                    }
                )
                res.status(200).json({
                    token : token,
                    messege : "User logged in successfully" 
                })
            }else{
                res.status(401).json({
                    messege : "Email or Password you have entered doesn't match"
                })
            }
        }        
}

}
export { AuthController, AuthController2 };
export const {registerUser} = AuthController;
export const {loginUser} = AuthController2; 

// export const { registerUser, loginUser } = new AuthController(); // we can do this if we dont write static before method name for example registerUser(){} after that we import registerUser in route file for example AuthController.registerUser and in app.ts file we write app.use("/api", authRoute); like this only no change

