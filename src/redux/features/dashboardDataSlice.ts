import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  type WeeklyActivity,
  type ExpenseData,
  type QuickTransferContact,
  type BalanceHistoryPoint,
} from '../../types/data.d';
import { mockApi } from '../../services/mockApi.ts';

interface DashboardDataState {
  weeklyActivity: WeeklyActivity[];
  expenseStatistics: ExpenseData[];
  quickTransferContacts: QuickTransferContact[];
  balanceHistory: BalanceHistoryPoint[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardDataState = {
  weeklyActivity: [],
  expenseStatistics: [],
  quickTransferContacts: [],
  balanceHistory: [],
  loading: false,
  error: null,
};

export const fetchDashboardData = createAsyncThunk(
  'dashboardData/fetchDashboardData',
  async (_, { rejectWithValue }) => {
    try {
      const [
        weeklyActivityRes,
        expenseStatsRes,
        quickTransferRes,
        balanceHistoryRes,
      ] = await Promise.all([
        mockApi.getWeeklyActivity(),
        mockApi.getExpenseStatistics(),
        mockApi.getQuickTransferContacts(),
        mockApi.getBalanceHistory(),
      ]);

      return {
        weeklyActivity: weeklyActivityRes.data,
        expenseStatistics: expenseStatsRes.data,
        quickTransferContacts: quickTransferRes.data,
        balanceHistory: balanceHistoryRes.data,
      };
    } catch (err) {
      const error = err as Error;
      return rejectWithValue(error.message || 'Failed to fetch dashboard data');
    }
  }
);

const dashboardDataSlice = createSlice({
  name: 'dashboardData',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action: PayloadAction<Omit<DashboardDataState, 'loading' | 'error'>>) => {
        state.loading = false;
        state.weeklyActivity = action.payload.weeklyActivity;
        state.expenseStatistics = action.payload.expenseStatistics;
        state.quickTransferContacts = action.payload.quickTransferContacts;
        state.balanceHistory = action.payload.balanceHistory;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardDataSlice.reducer;