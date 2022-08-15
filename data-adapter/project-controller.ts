import BaseController from './base-controller'
import db from './db'

export type ProjectControllerConfig = {
  controller: 'project'
  payload: CreateProjectPayload
}

type CreateProjectPayload = {
  method: 'createProject'
  body: { userId: number; name: string }
}

export default class ProjectController extends BaseController {
  async createProject(payload: CreateProjectPayload) {
    return db.project.create({
      data: {
        name: payload.body.name,
        owner: { connect: { id: payload.body.userId } },
      },
    })
  }
}
