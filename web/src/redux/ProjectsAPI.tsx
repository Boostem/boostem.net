import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Project } from '../types'

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api/',
  }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], any>({
      query: () => 'projects/',
    }),
  }),
})

export const { useGetProjectsQuery } = projectsApi
