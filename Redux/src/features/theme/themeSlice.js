import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    setThemeLight: () => "light",
    setThemeDark: () => "dark",
  },
});

export const { setThemeLight, setThemeDark } = themeSlice.actions;
export default themeSlice.reducer;
