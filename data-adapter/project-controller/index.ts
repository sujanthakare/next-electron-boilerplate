import db from '../db'
import BaseController from '../base-controller'

type CreateProjectMethod = {
  method: 'createProject'
  body: { name: string; email: string }
}

type Methods = CreateProjectMethod

export type ProjectControllerConfig = {
  controller: 'project'
} & Methods

export default class ProjectController extends BaseController {
  async createProject(callConfig: CreateProjectMethod) {
    return db.user.create({
      data: {
        ...callConfig.body,
      },
    })
  }
}
