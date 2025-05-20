import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../lib/supabaseClient';
import type { Session } from '@supabase/supabase-js';

interface SessionState {
  session: Session | null;
  loading: boolean;
  error: string | null;
}

const initialState: SessionState = {
  session: null,
  loading: true,
  error: null,
};

export const fetchSession = createAsyncThunk('session/fetchSession', async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
});

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSession: (state) => {
      state.session = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSession.fulfilled, (state, action) => {
        state.session = action.payload;
        state.loading = false;
      })
      .addCase(fetchSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch session';
      });
  },
});

export const { clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;