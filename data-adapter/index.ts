import { ipcMain } from 'electron'
import { ControllerConfig, controllerMap } from './controller-map'

export const register = () => {
  ipcMain.on('action', async (event, config: ControllerConfig) => {
    const { controller, payload } = config
    const ControllerClass = controllerMap[controller]

    try {
      if (ControllerClass) {
        const controllerInstance = new ControllerClass()
        const data = await controllerInstance.handleRoute(config)
        /**
         *
         */
        event.sender.send(`${controller}-${payload.method}-action-response`, {
          data,
          error: null,
        })
        /**
         *
         */
      } else {
        throw 'No controller with name ' + controller + ' found'
      }
    } catch (error) {
      console.log('ERROR')
      event.sender.send(`${controller}-${payload.method}-action-response`, {
        data: null,
        error: `${
          (error as Error).message
        }\n Check node console for full stacktrace`,
      })
    }
  })
}
