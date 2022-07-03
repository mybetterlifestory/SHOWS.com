import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShowsApis from '../services/dashShowsApis';

const initialState = {
    dashShows: [],
}

export const getDashShows = createAsyncThunk(
    'dashShows/getDashShows',
    async () => {
        const allShows = await ShowsApis.getAllShows();
        return allShows.data;
    }
)

export const creacteDashShow = createAsyncThunk(
    'dashShows/greactDashShow',
    async (newShow) => {
        return await ShowsApis.createNewShow(newShow);
    }
)

export const updateDashShow = createAsyncThunk(
    'dashShows/updateDashShow',
    async (showToUpdate) => {
        return await ShowsApis.updateShow(showToUpdate);
    }
)

export const deleteDashShow = createAsyncThunk(
    'dashShows/deleteDashShow',
    async (id) => {
        return await ShowsApis.deleteShow(id);
    }
)

const dashShowsSlice = createSlice({
    name: 'showsDash',
    initialState,
    extraReducers: {
        [getDashShows.fulfilled]: (state, action) => {
            state.dashShows = action.payload;
        },
    }
});

export default dashShowsSlice.reducer;