import { PLANNERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const plannersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlanners: builder.query({
      query: () => ({
        url: PLANNERS_URL,
       
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Planners'],
    }),
    getPlannerDetails: builder.query({
      query: (plannerId) => ({
        url: `${PLANNERS_URL}/${plannerId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createPlanner: builder.mutation({
      query: () => ({
        url: `${PLANNERS_URL}`,
        method: 'POST',
      }),
      invalidatesTags: ['Planner'],
    }),
    updatePlanner: builder.mutation({
      query: (data) => ({
        url: `${PLANNERS_URL}/${data.plannerId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Planners'],
    }),
    deletePlanner: builder.mutation({
      query: (plannerId) => ({
        url: `${PLANNERS_URL}/${plannerId}`,
        method: 'DELETE',
      }),
      providesTags: ['Planner'],
    }),
  }),
});

export const {
  useGetPlannersQuery,
  useGetPlannerDetailsQuery,
  useCreatePlannerMutation,
  useUpdatePlannerMutation,
  useDeletePlannerMutation,
} = plannersApiSlice;