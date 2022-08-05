type Methods = "add-user" | "get-user";

export default async function userController(method: Methods) {
  if (method === "add-user") {
    return {
      name: "sujan thakare",
    };
  }

  if (method) throw "Method not found";
}
