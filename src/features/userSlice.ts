import { createSlice } from '@reduxjs/toolkit';

interface userType {
  displayName: string,
  profilePic: string,
  email: string,
  password: string
}

type iniitialStateType = {
  user: userType | null
}

const initialState: iniitialStateType = {
  user: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {

  },
});

export const { login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer