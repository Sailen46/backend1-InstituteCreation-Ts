import express from "express";
const app = express();
import authRoute from "./route/globals/auth/auth-route";
import createInstituteRoute from "./route/institute-admin/institute-admin-route"



app.use(express.json());
app.use("/api", authRoute);
app.use("/api/institute-admin", createInstituteRoute)


export default app;
