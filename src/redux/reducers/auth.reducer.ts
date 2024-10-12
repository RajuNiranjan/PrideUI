import { ENV_VAR } from "@/utils/Env";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  _id: string;
  userName: string;
  email: string;
  mobileNumber: string;
  dob: string;
  gender: string;
  profilePic: string;
  profileBannerPic: string;
  isVerified: boolean;
  isPrivate: boolean;
  acceptTerms: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const token = localStorage.getItem("token");
    const { API_URI } = ENV_VAR;

    const res = await axios.get(`${API_URI}/api/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authPending: (state) => {
      state.loading = true;
    },
    authFulFilled: (state) => {
      state.loading = false;
    },
    authRejected: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(
        fetchUser.rejected,
        (state, action: PayloadAction<string | any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { authFulFilled, authPending, authRejected } = authSlice.actions;

export default authSlice.reducer;
