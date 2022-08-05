import BaseController from "./base-controller";
import UserController, { UserControllerConfig } from "./user-controller";

export type ControllerConfig = UserControllerConfig;

export const controllerMap: Record<
  ControllerConfig["controller"],
  typeof BaseController
> = {
  user: UserController,
};
