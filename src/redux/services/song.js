import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const songApi = createApi({
    reducerPath: "songApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com/search'}),
    endpoints: (builder) => ({
        fetchSong: builder.query({
            query: (song) => {
                return {
                    url: "",
                    params: {
                        q: song
                    },
                    headers: {
                        'X-RapidAPI-Key': '21a8342662msh9fac29e21126d9fp193e6ajsnbd708c8a2510',
                        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                    },
                    method: "GET",
                }
            }
        })
    })
})


export const { useFetchSongQuery } = songApi;
export {songApi};