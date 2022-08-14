import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { deleteProjectMutation } from './data-mutators';

export const mutationApi = createApi({
  reducerPath: 'mutationApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  keepUnusedDataFor: 360,
  endpoints: (builder) => ({
    /**
     *
     */
    deleteProject: builder.mutation<any, string>({
      async queryFn(projectId) {
        const data = await deleteProjectMutation(projectId);
        return { data };
      },
    }),
  }),
});

export default mutationApi;
