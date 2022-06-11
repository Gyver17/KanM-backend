import { Sequelize } from "sequelize-typescript";
import config from "./config.const";

const { db } = config;

export const sequelize = new Sequelize({
	database: db.database,
	dialect: "postgres",
	username: db.user,
	password: db.password,
});
