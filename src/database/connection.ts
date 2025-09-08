import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    database: process.env.DB_NAME || 'institute_creation', // database name given in .env
    dialect: "mysql", // which database you are using
    username: process.env.DB_USERNAME || 'root', // username given in .env
    password: process.env.DB_PASSWORD, // password given in .env
    host: process.env.DB_HOST || 'localhost', // localhost or IP address of server given in .env
    port: Number(process.env.DB_PORT), // Default MySQL port
    models: [__dirname + "/models"] // path of models
    
})
sequelize.authenticate()
  .then(() => {
    console.log("Database Connected Successfully.");
  })
  .catch((err) => {
    console.error(`Failed To Connect The Database ${err}`);
  });



  sequelize.sync({alter:false})
  .then(() => {
    console.log("All Models (Tables) Were Synchronized or Migrated Successfully.");
  })
  .catch((err) => {
    console.error(`Failed To Sync or Migrate The Models (Table) ${err}`);
  });

  export default sequelize