import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: "light",
    reducers: {
        setThemeLight: (state) => "light",
        setThemeDark: (state) => "dark"
    }
});

export const {setThemeLight, setThemeDark} = themeSlice.actions
export default themeSlice.reducer;
