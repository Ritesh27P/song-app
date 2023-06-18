// 'https://api.spotify.com/v1/browse/categories/toplists/playlists'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const spotifyApi = createApi({
    reducerPath: "spotifyApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spotify.com/v1/browse/categories/toplists/playlists'}),
    endpoints: (builder) => {
        fetchCharts: builder.query({
            query: () => {
                return {
                    
                }
            }
        })
    }
})
