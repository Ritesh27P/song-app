// const axios = require('axios');
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};


const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      const renderSong = action.payload.track?.filter(song => {
          return song.preview !== null;
      })
      if (action.payload.track) state.currentSongs = (renderSong)
      state.currentIndex = 0;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (!state.currentSongs[action.payload]?.preview_url) {
        state.currentSongs = state.currentSongs.filter((_, i) => i !== action.payload)
      }
      if (state.currentSongs[action.payload]) {
        state.activeSong = {
          preview: state.currentSongs[action.payload]?.preview_url,
          title: state.currentSongs[action.payload]?.name,
          artist: {
            name: state.currentSongs[action.payload]?.artists[0]?.name
          },
          album: {
            cover: state.currentSongs[action.payload]?.album?.images[0]?.url
          }
        };
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]) {
        state.activeSong = {
          preview: state.currentSongs[action.payload]?.preview_url,
          title: state.currentSongs[action.payload]?.name,
          artist: {
            name: state.currentSongs[action.payload]?.artists[0]?.name
          },
          album: {
            cover: state.currentSongs[action.payload]?.album?.images[0]?.url
          }
        };
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => { 
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;


