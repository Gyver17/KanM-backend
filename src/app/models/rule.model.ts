import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
	ForeignKey,
} from "sequelize";

import { sequelize } from "../../const/database.const";
import { Section } from "./section.model";

class Rule extends Model<InferAttributes<Rule>, InferCreationAttributes<Rule>> {
	declare id: string;
	declare sectionId: ForeignKey<Section["id"]>;
	declare trigger: string;
	declare action: string;
}

Rule.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		trigger: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		action: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "rule",
		createdAt: "created_at",
		updatedAt: "update_at",
	}
);

export { Rule };
