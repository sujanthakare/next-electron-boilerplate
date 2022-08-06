import BaseController from '../base-controller'

type CreateProjectMethod = {
  method: 'createProject'
  body: { name: string }
}

type Methods = CreateProjectMethod

export type ControllerConfig = {
  controller: 'project'
} & Methods

export default class ProjectController extends BaseController {
  async createProject(callConfig: CreateProjectMethod) {}
}
