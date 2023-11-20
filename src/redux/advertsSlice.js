import { createSlice } from '@reduxjs/toolkit';
import { fetchAllAdverts, fetchAdvertById } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    favorites: [],
    advert: {},
    isLoading: false,
    error: null,
  },
reducers: {
  toggleFavorites: (state, { payload }) => {
    const index = state.favorites.findIndex(advert => advert.id === payload.id)
    if (index !== -1) {
      state.favorites = state.favorites.filter(advert => advert.id !== payload.id)
  } else {
      
  state.favorites = [...state.favorites, payload]}
  },
  //  removeFavorites
},
  extraReducers: builder => {
    builder
      .addCase(fetchAllAdverts.pending, handlePending)
      .addCase(fetchAllAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = action.payload;
      })
      .addCase(fetchAllAdverts.rejected, handleRejected)
      .addCase(fetchAdvertById.pending, handlePending)
      .addCase(fetchAdvertById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.advert = action.payload;
      })
      .addCase(fetchAdvertById.rejected, handleRejected);
  },
});

export const { toggleFavorites } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
