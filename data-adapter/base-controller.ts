import { ControllerConfig } from './controller-map'

export default class BaseController {
  async handleRoute(controllerConfig: ControllerConfig) {
    const actionHandler = (this as any)[controllerConfig.method]

    if (actionHandler) {
      return actionHandler(controllerConfig)
    }
    console.error('Action not found!!')
  }
}
