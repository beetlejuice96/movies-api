require('dotenv-flow').config();

const config = {
  enviroment: process.env.NODE_ENV,
  port: process.env.NODE_PORT || 3000,
  cors:process.env.CORS,
  dbUser:process.env.DB_USER,
  dbPassword:process.env.DB_PASSWORD,
  dbHost:process.env.DB_HOST,
  dbName:process.env.DB_NAME
};

module.exports = { config };
