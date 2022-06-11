import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
	ForeignKey,
} from "sequelize";

import { sequelize } from "../../const/database.const";
import { Task } from "./task.model";
import { TeamMember } from "./teamMember.model";

class Comment extends Model<
	InferAttributes<Comment>,
	InferCreationAttributes<Comment>
> {
	declare id: string;
	declare taskId: ForeignKey<Task["id"]>;
	declare teamMemberId: ForeignKey<TeamMember["id"]>;
	declare contents: string;
}

Comment.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		contents: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "comment",
		createdAt: "created_at",
		updatedAt: "update_at",
	}
);

export { Comment };
