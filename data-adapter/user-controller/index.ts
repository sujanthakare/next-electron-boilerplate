import BaseController from '../base-controller'
import db from '../db'

type AddUserMethod = {
  method: 'addUser'
  body: { name: string }
}

type GetUsersMethod = {
  method: 'getUsers'
}

type Methods = AddUserMethod | GetUsersMethod

export type UserControllerConfig = {
  controller: 'user'
} & Methods

export default class UserController extends BaseController {
  /**
   *
   */
  async addUser(callConfig: AddUserMethod) {
    return db.user.create({
      data: {
        email: 'sujandt@gmail.com',
        name: callConfig.body.name,
      },
    })
  }

  /**
   *
   *
   */
  async getUsers() {
    return db.user.findMany()
  }
}
