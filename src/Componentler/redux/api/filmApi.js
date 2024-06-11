import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints

export const filmApi = createApi({
  reducerPath: "filmApi",

  //   `https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=5d527e668551b9b5558736c1885969c6`

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/search/movie?query=",
  }),
  endpoints: (builder) => ({
    getFilmByName: builder.query({
      query: (name) => `/${name}&api_key=5d527e668551b9b5558736c1885969c6`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFilmByNameQuery } = filmApi;
