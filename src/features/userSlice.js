import { createSlice } from "@reduxjs/toolkit";

let userInfo;

try {
  userInfo = JSON.parse(localStorage.getItem("userInfo")).data;
} catch (error) {
  userInfo = null;
}

const initialState = {
  user: userInfo,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    reset: (state) => {
      state.user = null;
    },
  },
});

export const { addUser, reset } = userSlice.actions;
export default userSlice.reducer;
