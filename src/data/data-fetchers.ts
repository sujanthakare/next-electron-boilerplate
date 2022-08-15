import { execute } from '@/data-bridge'
import { User } from '@prisma/client'
import { IProject } from './types'

/**
 *
 *
 */
export type FetchProjectsResponse = Array<IProject>

export const fetchProjects = async (): Promise<FetchProjectsResponse> => {
  return []
}

/**
 *
 *
 */

export type FetchUserResponse = User
export type FetchUserInput = {
  email: string
}

export const fetchUser = async (
  inputs: FetchUserInput
): Promise<FetchUserResponse> => {
  const { data, error } = await execute({
    controller: 'user',
    payload: {
      method: 'getUser',
      param: { email: inputs.email },
    },
  })

  if (error) {
    throw error
  }

  return data
}
