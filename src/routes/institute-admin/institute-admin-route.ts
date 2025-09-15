import express, { Router } from "express"
import InstituteAdminController from "../../controller/institute-admin/institute-admin-controller";





const router:Router  = express.Router()

router.route("/").post(InstituteAdminController.createInstitute)


export default router;