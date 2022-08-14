import BaseController from './base-controller'
import ProjectController, { CreateProjectMethod } from './project-controller'

export type ControllerConfig = CreateProjectMethod

export const controllerMap: Record<
  ControllerConfig['controller'],
  typeof BaseController
> = {
  project: ProjectController,
}
