"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Replace with your base URL
const API_URL = "http://192.168.10.19:8000";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createSession: builder.mutation({
      query: (data) => ({
        url: "/session/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateSessionMutation } = chatApi;
