"use client";

import baseApi from "../Api/baseApi";

export const seriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    seriesGet: builder.query({
      query: () => ({
        url: "/blogs/v1/ms-videos/",
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),

    storyCreate: builder.mutation({
      query: (data) => ({
        url: "/blogs/v1/blogs/",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      invalidatesTags: ["Story"],
    }),
    seriesDetails: builder.query({
      query: (id) => ({
        url: `/blogs/v1/ms-videos/${id}/`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // },
      }),
      providesTags: ["Blog"],
    }),
  }),
});

export const { useSeriesGetQuery, useStoryCreateMutation ,useSeriesDetailsQuery } = seriesApi;
