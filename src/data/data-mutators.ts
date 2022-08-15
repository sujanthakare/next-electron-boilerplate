import storageService from '@/common/services/storage-service'
import { execute } from '@/data-bridge'
import { Project, User } from '@prisma/client'

/**
 *
 */
export const deleteProjectMutation = async (id: string) => {}

/**
 *
 */

export type CreateProjectInputs = { name: string }

export type CreateProjectResponse = Project

export const createProjectMutation = async (inputs: CreateProjectInputs) => {
  const savedUser = storageService.get('user') as User

  const { data, error } = await execute({
    controller: 'project',
    payload: {
      method: 'createProject',
      body: {
        name: inputs.name,
        userId: savedUser.id,
      },
    },
  })

  if (error) {
    throw error
  }

  return data as Project
}

/**
 *
 *
 */

export type CreateUserInputs = {
  email: string
  name: string
}

export type CreateUserResponse = User

export const createUserMutation = async (
  inputs: CreateUserInputs
): Promise<CreateUserResponse> => {
  const { data, error } = await execute({
    controller: 'user',
    payload: {
      method: 'createUser',
      body: {
        email: inputs.email,
        name: inputs.name,
      },
    },
  })

  if (error) {
    throw error
  }

  return data
}
