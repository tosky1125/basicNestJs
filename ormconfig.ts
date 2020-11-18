import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_USE,
  entities: ["dist/**/**/*.entity.js"],
  migrations: ["dist/src/migration/*.js"],
};

export = connectionOptions;