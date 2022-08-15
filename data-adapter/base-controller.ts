import { ControllerConfig } from './controller-map'

export default class BaseController {
  async handleRoute(controllerConfig: ControllerConfig) {
    const { payload } = controllerConfig

    const actionHandler = (this as any)[payload.method]

    if (actionHandler) {
      return actionHandler(payload)
    }
    console.error('Action not found!!')
  }
}
