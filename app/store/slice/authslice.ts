import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false
};
const ApiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";


//to register a new user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: {
    email: string,
    name: string,
    password: string
  }, thunkAPI) => {
    try {
      const response = await axios.post(`${ApiUrl}/auth/register`, userData);
      return response.data;

    } catch (error: any) {
      const message = error.response?.data?.message || 'Something went wrong during registration';
      return thunkAPI.rejectWithValue(message);
    }
  }
)

// to login with existing users
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData: {
    email: string,
    password: string
  }, thunkAPI) => {
    try {
      const response = await axios.post(`${ApiUrl}/auth/login`, userData);
      if (typeof window !== 'undefined') {
        localStorage.setItem('bloggin_data', JSON.stringify(response.data));
      }
      return response.data;

    } catch (error: any) {
      const message = error.response?.data?.message || 'Something went wrong during login';
      return thunkAPI.rejectWithValue(message);
    }
  }
)


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.error = null,
        state.isAuthenticated = false,
        state.user = null
      // Clear localStorage on logout
      if (typeof window !== 'undefined') {
        localStorage.removeItem('bloggin_data');
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true,
          state.error = null,
          state.isAuthenticated = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false,
          state.user = action.payload,
          state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false,
          state.error = action.payload as string,
          state.isAuthenticated = false;

      })
  },
});

export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;