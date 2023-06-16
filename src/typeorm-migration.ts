import "dotenv/config";
import { DataSource } from "typeorm";

const configDB = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrationsTableName: "_migration",
  migrations: [__dirname + "/_migrations/**/*{.ts,.js}"],
  logging: process.env.DB_LOGGING === "true" ? true : false,
});

export default configDB;
