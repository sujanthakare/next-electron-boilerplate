import { ipcRenderer } from 'electron'
import { ControllerConfig } from '../data-adapter/controller-map'

export const execute = (
  config: ControllerConfig
): Promise<{ data: any; error: string | null }> =>
  new Promise((resolve, reject) => {
    /**
     *
     * Response callback
     */
    const responseCallback = (_: unknown, response: any) => {
      console.log(
        `[OUT/${config.controller}_${config.payload.method}]: `,
        response
      )

      /**
       * Remove added listener
       */
      ipcRenderer.removeListener(
        `${config.controller}-${config.payload.method}-action-response`,
        responseCallback
      )

      /**
       * Return promise
       */
      resolve(response)
    }

    /**
     * Listening to response
     */

    ipcRenderer.on(
      `${config.controller}-${config.payload.method}-action-response`,
      responseCallback
    )

    /**
     * Request Started
     */
    console.log(`[IN/${config.controller}_${config.payload.method}]: `, config)
    ipcRenderer?.send('action', config)
  })
