import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { FetchProjectsResponse, fetchProjects } from './data-fetchers';
import {
  CreateProjectInputs,
  createProjectMutation,
  deleteProjectMutation,
} from './data-mutators';

export const queryApi = createApi({
  reducerPath: 'queryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  keepUnusedDataFor: 360,
  tagTypes: ['PROJECTS'],
  endpoints: (builder) => ({
    /**
     *
     *  Get projects
     */
    getProjects: builder.query<FetchProjectsResponse, void>({
      providesTags: [{ type: 'PROJECTS' }],
      async queryFn() {
        const data = await fetchProjects();
        return { data };
      },
    }),

    /**
     *
     *
     */
    deleteProject: builder.mutation<any, string>({
      invalidatesTags: ['PROJECTS'],
      async queryFn(projectId) {
        const data = await deleteProjectMutation(projectId);
        return { data };
      },
    }),
    /**
     *
     *
     */
    createProject: builder.mutation<any, CreateProjectInputs>({
      invalidatesTags: ['PROJECTS'],
      async queryFn(inputs) {
        const data = await createProjectMutation(inputs);
        return { data };
      },
    }),
  }), // endPoints
});

export default queryApi;
