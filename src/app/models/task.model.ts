import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
	ForeignKey,
} from "sequelize";

import { sequelize } from "../../const/database.const";
import { Section } from "./section.model";
import { TeamMember } from "./teamMember.model";

class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {
	declare id: string;
	declare sectionId: ForeignKey<Section["id"]>;
	declare memberAssignedId: ForeignKey<TeamMember["id"]>;
	declare taskName: string;
	declare taskDescription: string;
	declare priority: number; // 1 to 10
	declare finished: boolean;
	declare startTime: string;
	declare endTime: string;
}

Task.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		taskName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: "task_name",
		},
		taskDescription: {
			type: DataTypes.STRING(200),
			field: "task_description",
		},
		priority: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		finished: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			allowNull: false,
		},
		startTime: {
			type: DataTypes.DATE,
			allowNull: false,
			field: "start_time",
		},
		endTime: {
			type: DataTypes.DATE,
			allowNull: false,
			field: "end_time",
		},
	},
	{
		sequelize,
		tableName: "task",
		createdAt: "created_at",
		updatedAt: "update_at",
	}
);

export { Task };
