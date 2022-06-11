import app from "./app/app";
import { sequelize } from "./const/database.const";

// import "./app/databaseAssociations";

async function main() {
	await sequelize.sync({ force: false });
	app.listen(app.get("port"), () => {
		console.log("Server on port", app.get("port"));
	});
}

main();
