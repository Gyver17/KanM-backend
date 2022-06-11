import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
} from "sequelize";

import { sequelize } from "../../const/database.const";

class WorkSpace extends Model<
	InferAttributes<WorkSpace>,
	InferCreationAttributes<WorkSpace>
> {
	declare id: string;
	declare workSpaceName: string;
	declare workSpaceDescription: string;
}

WorkSpace.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		workSpaceName: {
			type: DataTypes.STRING(100),
			field: "work_space_name",
		},
		workSpaceDescription: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: "work_space_description",
		},
	},
	{
		sequelize,
		tableName: "work_space",
		createdAt: "created_at",
		updatedAt: "update_at",
	}
);

export { WorkSpace };
