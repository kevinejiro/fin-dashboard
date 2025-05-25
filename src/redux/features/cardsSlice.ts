import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CardProps } from '../../types/data.d';
import { mockApi } from '../../services/mockApi.ts';

interface CardsState {
  cards: CardProps[];
  loading: boolean;
  error: string | null;
}

const initialState: CardsState = {
  cards: [],
  loading: false,
  error: null,
};

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await mockApi.getCards();
      return response.data;
    } catch (err) {
      const error = err as Error;
      return rejectWithValue(error.message || 'Failed to fetch cards');
    }
  }
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<CardProps[]>) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default cardsSlice.reducer;