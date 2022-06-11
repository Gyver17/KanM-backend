import path from "path";
import dotenv from "dotenv"

dotenv.config({
	path: path.resolve(".env" + "." + process.env.NODE_ENV)
});

export default {
	db: {
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		ssl: {
			rejectUnauthorized: false,
		},
	},
};