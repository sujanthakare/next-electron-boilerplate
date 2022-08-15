import BaseController from './base-controller'
import ProjectController, {
  ProjectControllerConfig,
} from './project-controller'
import UserController, { UserControllerConfig } from './user-controller'

export type ControllerConfig = UserControllerConfig | ProjectControllerConfig

export const controllerMap: Record<
  ControllerConfig['controller'],
  typeof BaseController
> = {
  user: UserController,
  project: ProjectController,
}
