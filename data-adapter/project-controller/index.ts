import db from '../db'
import BaseController from '../base-controller'

export type CreateProjectMethod = {
  controller: 'project'
  method: 'createProject'
  body: { name: string; userId: string }
}

export default class ProjectController extends BaseController {
  async createProject(callConfig: CreateProjectMethod) {
    return {}
  }
}
