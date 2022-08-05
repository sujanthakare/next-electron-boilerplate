import { ipcRenderer } from "electron";
import { ActionPayload } from "../../domain/data-adapter/types";

export const execute = (payload: ActionPayload) => {
  return new Promise((resolve, reject) => {
    ipcRenderer.on(
      `${payload.controller}-${payload.method}-action-response`,
      (event, response) => {
        resolve(response);
      }
    );

    ipcRenderer?.send("action", payload);
  });
};
