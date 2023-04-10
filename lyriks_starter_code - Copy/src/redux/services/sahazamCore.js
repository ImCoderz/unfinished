import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
  export const shazamCoreApi=createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','01c5343836mshde417b7f7ebafebp1394c0jsn6349de814e82')
            return headers;
        },
    }),
    endpoints:(builder)=>({
        getTopCharts:builder.query({query:()=>'/charts/world'})
    })
  })
export const{
    useGetTopChartsQuery,
}=shazamCoreApi;

