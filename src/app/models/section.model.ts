import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
	ForeignKey,
} from "sequelize";

import { sequelize } from "../../const/database.const";
import { Project } from "./project.model";

class Section extends Model<
	InferAttributes<Section>,
	InferCreationAttributes<Section>
> {
	declare id: string;
	declare projectId: ForeignKey<Project["id"]>;
	declare sectionName: string;
	declare sectionDescription: string;
}

Section.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		sectionName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: "section_name",
		},
		sectionDescription: {
			type: DataTypes.STRING(200),
			field: "section_description",
		},
	},
	{
		sequelize,
		tableName: "section",
		createdAt: "created_at",
		updatedAt: "update_at",
	}
);

export { Section };
