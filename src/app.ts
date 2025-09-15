import express from "express";
const app = express();
import authRoute from "./routes/global/auth/auth-route";
import createInstituteRoute from "./routes/institute-admin/institute-admin-route"



app.use(express.json());
app.use("/api", authRoute);
app.use("/api/institute-admin", createInstituteRoute)


export default app;
