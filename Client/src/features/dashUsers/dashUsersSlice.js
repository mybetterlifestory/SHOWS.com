import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UsersApis from '../services/dashUsersApis';

const initialState = {
    dashUsers: [],
}

export const getDashUsers = createAsyncThunk(
    'dashUsers/getDashUsers',
    async () => {
        const allUsers = await UsersApis.getAllUsers();
        return allUsers.data;
    }
)

export const createDashUser = createAsyncThunk(
    'dashUsers/createDashUser',
    async (newUser) => {
        return await UsersApis.createNewUser(newUser);
    }
)

export const updateDashUser = createAsyncThunk(
    'dashUsers/updateDashUser',
    async (userToUpdate) => {
        return await UsersApis.updateUser(userToUpdate);
    }
)

export const deleteDashUser = createAsyncThunk(
    'dashUsers/deleteDashUser',
    async (id) => {
        return await UsersApis.deleteUser(id);
    }
)

const dashUsersSlice = createSlice({
    name: 'usersDash',
    initialState,
    extraReducers: {
        [getDashUsers.fulfilled]: (state, action) => {
            state.dashUsers = action.payload;
        },
    }
});

export default dashUsersSlice.reducer;