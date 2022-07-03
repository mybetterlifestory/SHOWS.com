import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SubscriptionsApis from '../services/dashSubApis';

const initialState = {
    dashSubs: [],
}

export const getDashSubs = createAsyncThunk(
    'dashSubs/getDashSubs',
    async () => {
        const allSubscriptions = await SubscriptionsApis.getAllSubs();
        return allSubscriptions.data;
    }
)

export const createDashSubs = createAsyncThunk(
    'dashSubs/createDashSubs',
    async (newSubs) => {
        return await SubscriptionsApis.createNewSub(newSubs).data;
    }
)

export const updateDashSub = createAsyncThunk(
    'dashSubs/updateDashSub',
    async (subToUpdate) => {
        return await SubscriptionsApis.updateSub(subToUpdate).data;
    }
)

export const deleteDashSub = createAsyncThunk(
    'dashSubs/deleteDashSub',
    async (id) => {
        return await SubscriptionsApis.deleteSub(id).data;
    }
)

const dashSubsSlice = createSlice({
    name: 'subscriptions',
    initialState,
    extraReducers: {
        [getDashSubs.fulfilled]: (state, action) => {
            state.dashSubs = action.payload;
        }
    }
});

export default dashSubsSlice.reducer;