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
<<<<<<< Updated upstream
export default themeSlice.reducer;

=======
export default themeSlice.reducer
>>>>>>> Stashed changes

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
export default themeSlice.reducer