import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import memberApis from '../services/memberApis';

const initialState = {
    member: []
}

export const memberInfo = createAsyncThunk(
    'member/memberInfo',
    async (member) => {
        return await memberApis.memberLogin(member);
    }
)

export const memberSlice = createSlice({
    name: 'members',
    initialState,
    extraReducers: {
        [memberInfo.fulfilled]: (state, { payload }) => {
            state.member = payload;
        }
    }
})

export default memberSlice.reducer;