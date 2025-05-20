import { createSlice } from '@reduxjs/toolkit';
import { supabase } from '../../lib/supabaseClient';

const sessionSlice = createSlice({
  name: 'session',
  initialState: { session: null, loading: true },
  reducers: {
    setSession(state, action) {
      state.session = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    }
  }
});
export const { setSession, setLoading } = sessionSlice.actions;
export default sessionSlice.reducer;