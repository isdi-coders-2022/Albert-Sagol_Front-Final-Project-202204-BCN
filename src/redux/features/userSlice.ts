import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserData } from "../../types/types";

const userInitialState: User = {
  username: "",
  adminUser: false,
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    register: (user, action: PayloadAction<UserData>): User => ({
      ...action.payload,
      logged: true,
    }),
  },
});

export const { register: registerActionCreator } = userSlice.actions;

export default userSlice.reducer;
