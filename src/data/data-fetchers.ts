import { IProject } from './types'

/**
 *
 *
 */
export type FetchProjectsResponse = Array<IProject>

export const fetchProjects = async (): Promise<FetchProjectsResponse> => {
  return []
}
