import { ProjectStatusEnum } from "../enums/ProjectStatus.enum";

export interface ProjectInterface {
  id: string | number;
  name: string;
  status: ProjectStatusEnum;
}
