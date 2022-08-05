import BaseController from "@data-adapter/base-controller";

type CreateProjectMethod = {
  method: "createProject";
  body: { name: string };
};

type Methods = CreateProjectMethod;

export type ControllerConfig = {
  controller: "project";
} & CreateProjectMethod;

export default class ProjectController extends BaseController {
  async createProject(callConfig: CreateProjectMethod) {}
}
