import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const musicApi = createApi({
    reducerPath: "musicApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://billboard-api5.p.rapidapi.com/api/charts/billboard-global-200'}),
    endpoints: (builder) => ({
        topChart: builder.query({
            query: () => {
                return {
                    url: "",
                    headers: {
                        'X-RapidAPI-Key': '21a8342662msh9fac29e21126d9fp193e6ajsnbd708c8a2510',
                        'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
                    },
                    method: "GET",
                }
            }
        })
    })
})

const artistsApi = createApi({
    reducerPath: 'artistsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://billboard3.p.rapidapi.com/'}),
    endpoints: (builder) => ({
        topArtists: builder.query({
            query: () => {
                return {
                    url: "/artist-100",
                    params: {
                        date: '2022-06-06',
                        range: '1-50'
                    },
                    headers: {
                        'X-RapidAPI-Key': '21a8342662msh9fac29e21126d9fp193e6ajsnbd708c8a2510',
                        'X-RapidAPI-Host': 'billboard3.p.rapidapi.com'
                    },
                    method: "GET"
                }
            }
        })
    })
})

const artistDetail = createApi({
    reducerPath: 'artistDetail',
    baseQuery: fetchBaseQuery({baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com/search'}),
    endpoints: (builder) => ({
        artistDetail: builder.query({
            query: (artist_name) => {
                return {
                    url: '',
                    params: {q: artist_name},
                    headers: {
                        'X-RapidAPI-Key': '21a8342662msh9fac29e21126d9fp193e6ajsnbd708c8a2510',
                        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                    }
                }
            }
        }),
        searchQuery: builder.query({
            query: (search) => {
                return {
                    url: "",
                    params: {q: search},
                    headers: {
                        'X-RapidAPI-Key': '21a8342662msh9fac29e21126d9fp193e6ajsnbd708c8a2510',
                        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                    }
                }
            }
        })
    })
})

export const { useTopChartQuery } = musicApi;
export const { useTopArtistsQuery } = artistsApi;
export const { useArtistDetailQuery, useSearchQueryQuery } = artistDetail;
export {musicApi, artistsApi, artistDetail}

