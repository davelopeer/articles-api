const config = {
  // Application General Information
  appName: process.env.APP_NAME,
  appAdminEmail: process.env.APP_ADMIN_EMAIL,

  // Service ports
  httpPort: process.env.SERVICE_PORT || 8080,

  // Service execution environment
  env: process.env.ENV || 'development',

  // --------------------------------------
  // Database
  dbHost: process.env.DB_HOST || 'localhost',
  dbUser: process.env.DB_USER || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'postgres',
  dbName: process.env.DB_NAME || 'postgres',
};

module.exports = config;
