import app from "./src/app";
import envConfig from "./src/config/config";
import sequelize from "./src/database/connection"; // we can write import "../database/connection" also
sequelize.sync({alter:true})



const startServer = () => {
    const port = envConfig.portNumber || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
startServer();