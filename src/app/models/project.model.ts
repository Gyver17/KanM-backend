import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
	ForeignKey,
} from "sequelize";

import { sequelize } from "../../const/database.const";
import { WorkSpace } from "./workSpace.model";

class Project extends Model<
	InferAttributes<Project>,
	InferCreationAttributes<Project>
> {
	declare id: string;
	declare workSpaceId: ForeignKey<WorkSpace["id"]>;
	declare projectName: string;
	declare projectDescription: string;
}

Project.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		projectName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: "project_name",
		},
		projectDescription: {
			type: DataTypes.STRING(200),
			field: "project_description",
		},
	},
	{
		sequelize,
		tableName: "project",
		createdAt: "created_at",
		updatedAt: "update_at",
	}
);

export { Project };
