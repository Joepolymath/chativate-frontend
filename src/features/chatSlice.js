import { createSlice } from "@reduxjs/toolkit";

// let userInfo;

// try {
//   userInfo = JSON.parse(localStorage.getItem("userInfo")).data;
// } catch (error) {
//   userInfo = null;
// }

const initialState = {
  selectedChat: "",
  chats: [],
};

const chatSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
  },
});

export const { addSelectedChat, setChats } = chatSlice.actions;
export default chatSlice.reducer;
