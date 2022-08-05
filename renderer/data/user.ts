import { execute } from "./adapter";

type User = {
  name: string;
};

export const addUser = (user: User) => {
  return execute({
    controller: "user",
    method: "add-user",
    args: { name: "sujan" },
  });
};
