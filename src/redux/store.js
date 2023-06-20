import { configureStore } from '@reduxjs/toolkit';
import { musicApi, useTopChartQuery, artistsApi, useTopArtistsQuery, artistDetail, useArtistDetailQuery } from './services/deezer';
import playerReducer from './features/playerSlice';
import { songApi, useFetchSongQuery } from './services/song';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [musicApi.reducerPath]: musicApi.reducer,
    [songApi.reducerPath]: songApi.reducer,
    [artistsApi.reducerPath]: artistsApi.reducer,
    [artistDetail.reducerPath]: artistDetail.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware).concat(songApi.middleware).concat(artistsApi.middleware).concat(artistDetail.middleware)
});

setupListeners(store.dispatch)

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerReducer
export { useTopChartQuery, useFetchSongQuery, useTopArtistsQuery, useArtistDetailQuery }