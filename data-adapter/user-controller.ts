import BaseController from './base-controller'
import db from './db'

type CreateUserPayload = {
  method: 'createUser'
  body: {
    email: string
    name: string
  }
}

type GetUserPayload = {
  method: 'getUser'
  param: {
    email: string
  }
}

export type UserControllerConfig = {
  controller: 'user'
  payload: CreateUserPayload | GetUserPayload
}

export default class UserController extends BaseController {
  async getUser(payload: GetUserPayload) {
    return await db.user.findFirst({
      where: {
        email: {
          equals: 'sujandt@gmail.com',
        },
      },
    })
  }

  async createUser(payload: CreateUserPayload) {
    return await db.user.create({
      data: { email: payload.body.email, name: payload.body.name },
    })
  }
}
