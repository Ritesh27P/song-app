import { configureStore } from '@reduxjs/toolkit';
import { musicApi, useTopChartQuery } from './services/deezer';
import playerReducer from './features/playerSlice';
import { songApi, useFetchSongQuery } from './services/song';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [musicApi.reducerPath]: musicApi.reducer,
    [songApi.reducerPath]: songApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware).concat(songApi.middleware)
});

setupListeners(store.dispatch)

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerReducer
export { useTopChartQuery, useFetchSongQuery }