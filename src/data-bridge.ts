import { ipcRenderer } from 'electron'
import { ControllerConfig } from '../data-adapter/controller-map'

export const execute = (
  payload: ControllerConfig
): Promise<{ data: any; error: string | null }> =>
  new Promise((resolve, reject) => {
    ipcRenderer.on(
      `${payload.controller}-${payload.method}-action-response`,
      (event, response) => {
        console.log('[execute_response]: ', response)
        resolve(response)
      }
    )
    console.log('[execute_request]: ', payload)
    ipcRenderer?.send('action', payload)
  })
