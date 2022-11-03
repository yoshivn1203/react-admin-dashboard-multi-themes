import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: '',
  color: '',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setModeAction: (state, { payload }) => {
      state.mode = payload;
    },
    setColorAction: (state, { payload }) => {
      state.color = payload;
    },
  },
});
export const { setModeAction, setColorAction } = themeSlice.actions;
export default themeSlice.reducer;
