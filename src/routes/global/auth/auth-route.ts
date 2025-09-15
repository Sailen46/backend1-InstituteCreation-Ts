import express, { Router } from "express"
import { loginUser, registerUser } from "../../../controller/globals/auth/auth-controller";



const router:Router  = express.Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser) // login function to be added

export default router;
