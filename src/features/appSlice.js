import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    route: "signin",
    user: {},
    imgSrc: "",
    error: "",
    isLoading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setImgSrc: (state, action) => {
      state.imgSrc = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    navigate: (state, action) => {
      state.route = action.payload;
    },
  },
});

export const { navigate, setUser, setError, setIsLoading, setImgSrc } =
  appSlice.actions;
export default appSlice.reducer;
