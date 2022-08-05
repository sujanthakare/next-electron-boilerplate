import db from "../db";

type Methods = "add-user" | "get-users" | "index";

export default async function userController(method: Methods, args) {
  if (method === "add-user") {
    return db.user.create({
      data: {
        email: "sujandt@gmail.com",
        name: args.name,
      },
    });
  }

  if (method === "get-users") {
    return db.user.findMany();
  }

  throw "Method not found";
}
