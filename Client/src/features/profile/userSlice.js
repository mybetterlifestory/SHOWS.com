import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from '../services/userApi';

const initialState = {
    user: []
}

export const userInfo = createAsyncThunk(
    'user/userInfo',
    async (user) => {
        return await userApi.login(user);
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // userInfo: (state, { payload }) => {
        //     state.user = payload;
        // },
    },
    extraReducers: {
        [userInfo.fulfilled]: (state, { payload }) => {
            state.user = payload;
        }
    }
})

// export const { userInfo } = userSlice.actions;
// export const getUser = (state) => state.user.user;
export default userSlice.reducer;