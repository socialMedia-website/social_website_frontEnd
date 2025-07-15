import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";
export const postApi = createApi({
  reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
      endpoints: (builder) => ({
        getPosts: builder.query({
          query: () => "/posts",
        }),
        getPostById: builder.query({
          query: (id) => `/posts/${id}`,
        }),
        createPost: builder.mutation({
          query: (newPost) => ({
            url: "/posts",
            method: "POST",
            body: newPost,
          }),
        }),
        updatePost: builder.mutation({
          query: ({ id, ...updatedPost }) => ({
            url: `/posts/${id}`,
            method: "PUT",
            body: updatedPost,
          }),
        }),
        deletePost: builder.mutation({
          query: (id) => ({
            url: `/posts/${id}`,
            method: "DELETE",
          }),
        }),
      }),
    }),

});
export const {
  useGetPostsQuery, 
    useGetPostByIdQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postApi;

    