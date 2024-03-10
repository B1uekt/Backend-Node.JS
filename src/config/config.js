require('dotenv').config(); // Yêu cầu nếu bạn sử dụng dotenv để quản lý biến môi trường
module.exports = {
    development: {
        username: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "123456",
        database: process.env.DB_NAME || "nodejs",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3307,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    test: {
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || null,
        database: process.env.DB_NAME_TEST || "database_test",
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || null,
        database: process.env.DB_NAME_PROD || "database_production",
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: "mysql"
    }
};
