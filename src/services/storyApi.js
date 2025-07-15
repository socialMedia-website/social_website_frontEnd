import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const storyApi = createApi({
  reducerPath: 'storyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL, 
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createStory: builder.mutation({
      query: (formData) => ({
        url: '/stories/create',
        method: 'POST',
        body: formData,
        formData: true,
      }),
    }),
    getMyStories: builder.query({
      query: ({page = 1, limit =10} ={}) => `/stories/my?page=${page}&limit=${limit}`,
    }),
    getFriendsStories: builder.query({
      query: ({ page = 1, limit = 10 } = {}) => `/stories/friends?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useCreateStoryMutation,useGetMyStoriesQuery, useGetFriendsStoriesQuery } = storyApi;