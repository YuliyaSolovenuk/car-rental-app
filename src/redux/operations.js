import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllAdverts, getAdvertById } from '../services/axiosMockAPI';

export const fetchAllAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    try {
      const res = await getAllAdverts(page);

      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAdvertById = createAsyncThunk(
  'adverts/fetchOne',
  async (advertId, thunkAPI) => {
    try {
      const res = await getAdvertById(advertId);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
