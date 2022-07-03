import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    shows: [],
    show: []
}

export const getAllShows = createAsyncThunk(
    'shows/getAllShows',
    async () => {
        // const response = await axios.get('https://api.tvmaze.com/shows');
        const response = await axios.get('http://localhost:9999/shows');
        return response.data;
    }
)

export const showById = createAsyncThunk(
    'show/showById',
    async (id) => {
        const response = await axios.get(`http://localhost:9999/shows/${id}`);
        return response.data;
    }
)

const showsSlice = createSlice({
    name: 'shows',
    initialState,
    extraReducers: {
        [getAllShows.fulfilled]: (state, action) => {
            state.shows = action.payload;
        },
        [showById.fulfilled]: (state, action) => {
            state.show = action.payload;
            // console.log(state.show);
        }
    }
});

export default showsSlice.reducer;