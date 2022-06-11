import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
	ForeignKey,
} from "sequelize";

import { sequelize } from "../../const/database.const";
import { User } from "./user.model";

class Session extends Model<
	InferAttributes<Session>,
	InferCreationAttributes<Session>
> {
	declare id: string;
	declare userId: ForeignKey<User["id"]>;
	declare secretKey: string;
	declare ip: string;
}

Session.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		secretKey: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
		},
		ip: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "session",
		createdAt: "created_at",
		updatedAt: "update_at",
	}
);

export { Session };
