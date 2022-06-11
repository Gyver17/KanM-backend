import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
} from "sequelize";

import { sequelize } from "../../const/database.const";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
	declare id: string;
	declare userName: string;
	declare email: string;
	declare password: string;
	declare firstName: string;
	declare lastName: string;
	declare secretCode: CreationOptional<string>;
}

User.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		userName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
			field: "username",
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
		},
		firstName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: "first_name",
		},
		lastName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: "last_name",
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		secretCode: {
			type: DataTypes.STRING(100),
			field: "secret_code",
		},
	},
	{
		sequelize,
		tableName: "user",
		createdAt: "created_at",
		updatedAt: "update_at",
	}
);

export { User };
