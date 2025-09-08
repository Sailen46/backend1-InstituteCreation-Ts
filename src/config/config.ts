import dotenv from "dotenv";
dotenv.config();

const envConfig = {
  portNumber: process.env.PORT || 3000,
};

export default envConfig;