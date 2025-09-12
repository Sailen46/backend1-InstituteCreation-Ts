import app from "./src/app";
import envConfig from "./src/config/config";





const startServer = () => {
    const port = envConfig.portNumber || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
startServer();