import express, { Router } from "express"
import { createInstitute } from "../../controller/institute-admin/institute-admin-controller";


const router:Router  = express.Router()

router.route("/").post(createInstitute)


export default router;