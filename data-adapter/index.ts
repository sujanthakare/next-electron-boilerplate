import { ipcMain } from "electron";
import { ControllerConfig, controllerMap } from "./controller-map";

if (ipcMain) {
  ipcMain.on("action", async (event, payload: ControllerConfig) => {
    const { controller, method = "index" } = payload;
    const ControllerClass = controllerMap[controller];

    try {
      if (ControllerClass) {
        const controllerInstance = new ControllerClass();
        const data = await controllerInstance.handleRoute(payload);
        /**
         *
         */
        event.sender.send(`${controller}-${method}-action-response`, {
          data,
          error: null,
        });
        /**
         *
         */
      } else {
        throw "No controller with name " + controller + " found";
      }
    } catch (error) {
      console.log("ERROR");
      event.sender.send(`${controller}-${method}-action-response`, {
        data: null,
        error: `${error.message}\n Check node console for full stacktrace`,
      });
    }
  });
}
