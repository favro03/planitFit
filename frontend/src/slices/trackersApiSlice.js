import { TRACKERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const trackersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrackers: builder.query({
      query: () => ({
        url: TRACKERS_URL,
       
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Trackers'],
    }),
    getTrackerDetails: builder.query({
      query: (trackerId) => ({
        url: `${TRACKERS_URL}/${trackerId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createTracker: builder.mutation({
      query: () => ({
        url: `${TRACKERS_URL}`,
        method: 'POST',
      }),
      invalidatesTags: ['Tracker'],
    }),
    updateTracker: builder.mutation({
      query: (data) => ({
        url: `${TRACKERS_URL}/${data.trackerId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Trackers'],
    }),
    deleteTracker: builder.mutation({
      query: (trackerId) => ({
        url: `${TRACKERS_URL}/${trackerId}`,
        method: 'DELETE',
      }),
      providesTags: ['Tracker'],
    }),
  }),
});

export const {
  useGetTrackersQuery,
  useGetTrackerDetailsQuery,
  useCreateTrackerMutation,
  useUpdateTrackerMutation,
  useDeleteTrackerMutation,
} = trackersApiSlice;