import { execute } from '@/data-bridge'

/**
 *
 */
export const deleteProjectMutation = async (id: string) => {
  return await execute({
    controller: 'project',
    method: 'createProject',
    body: {},
  })
}

/**
 *
 */

export type CreateProjectInputs = {
  name: string
}

export const createProjectMutation = async (inputs: CreateProjectInputs) => {
  // TODO:
  return { data: [] }
}
