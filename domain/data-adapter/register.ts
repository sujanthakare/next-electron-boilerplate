import { ipcMain } from "electron";
import { ActionPayload } from "./types";
import user from "./user";

const controllerMap: Record<
  string,
  (method: string, args: any) => Promise<any>
> = {
  user: user,
};

ipcMain.on("action", (event, payload: ActionPayload) => {
  const { controller, method = "index" } = payload;

  const handleController = controllerMap[controller];
  if (handleController) {
    handleController(payload.method, payload.args).then((response) => {
      event.sender.send(`${controller}-${method}-action-response`, response);
    });
  } else {
    throw "No controller with name " + controller + " found";
  }
});
