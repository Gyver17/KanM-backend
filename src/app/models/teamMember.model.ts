import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
	ForeignKey,
} from "sequelize";

import { sequelize } from "../../const/database.const";
import { WorkSpace } from "./workSpace.model";
import { User } from "./user.model";

class TeamMember extends Model<
	InferAttributes<TeamMember>,
	InferCreationAttributes<TeamMember>
> {
	declare id: string;
	declare workSpaceId: ForeignKey<WorkSpace["id"]>;
	declare userId: ForeignKey<User["id"]>;
	declare owner: boolean;
	declare invitation: "accepted" | "pending" | "rejected";
}

TeamMember.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		owner: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			allowNull: false,
		},
		invitation: {
			type: DataTypes.STRING(15),
			defaultValue: "pending",
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "team_member",
		createdAt: "created_at",
		updatedAt: "update_at",
	}
);

export { TeamMember };
