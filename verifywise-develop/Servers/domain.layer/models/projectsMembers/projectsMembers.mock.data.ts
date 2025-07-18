import { ProjectsMembers } from "./projectsMembers.model";

export const projectsMembers = (
  userId1: number,
  userId2: number,
  projectId1: number,
  projectId2: number
): ProjectsMembers[] => {
  return [
    { user_id: userId1, project_id: projectId1 },
    { user_id: userId2, project_id: projectId1 },
    { user_id: userId1, project_id: projectId2 },
    { user_id: userId2, project_id: projectId2 },
  ];
};
