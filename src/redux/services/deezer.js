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

export const { useTopChartQuery } = musicApi;
export {musicApi}

