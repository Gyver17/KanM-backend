import { User } from "./models/user.model";
import { Session } from "./models/session.model";
import { WorkSpace } from "./models/workSpace.model";
import { Project } from "./models/project.model";
import { TeamMember } from "./models/teamMember.model";
import { Section } from "./models/section.model";
import { Rule } from "./models/rule.model";
import { Task } from "./models/task.model";
import { Comment } from "./models/comment.model";

/* --- User --- */
User.hasMany(Session, {
	sourceKey: "id",
	foreignKey: "userId",
});

User.hasMany(TeamMember, {
	sourceKey: "id",
	foreignKey: "userId",
});

/* --- WorkSpace --- */
WorkSpace.hasMany(Project, {
	sourceKey: "id",
	foreignKey: "workSpaceId",
});

WorkSpace.hasMany(TeamMember, {
	sourceKey: "id",
	foreignKey: "workSpaceId",
});

/* --- Project --- */
Project.hasMany(Section, {
	sourceKey: "id",
	foreignKey: "projectId",
});

/* --- Section --- */
Section.hasMany(Rule, {
	sourceKey: "id",
	foreignKey: "sectionId",
});

Section.hasMany(Task, {
	sourceKey: "id",
	foreignKey: "sectionId",
});

/* --- TeamMember --- */
TeamMember.hasMany(Task, {
	sourceKey: "id",
	foreignKey: "memberAssignedId",
});

TeamMember.hasMany(Comment, {
	sourceKey: "id",
	foreignKey: "teamMemberId",
});

/* --- Task --- */
Task.hasMany(Comment, {
	sourceKey: "id",
	foreignKey: "taskId",
});
