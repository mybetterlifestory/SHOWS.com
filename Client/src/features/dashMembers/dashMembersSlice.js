import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MembersApis from '../services/dashMembersApis';

const initialState = {
    dashMembers: [],
}

export const getDashMembers = createAsyncThunk(
    'dashMembers/getDashMembers',
    async () => {
        const allMembers = await MembersApis.getAllMembers();
        return allMembers.data;
    }
)

export const createDashMember = createAsyncThunk(
    'dashMembers/createDashMember',
    async (newMember) => {
        return await MembersApis.createNewMember(newMember).data;
    }
)

export const updateDashMember = createAsyncThunk(
    'dashMembers/updateDashMember', 
    async (memberToUpdate) => {
        return await MembersApis.updateMember(memberToUpdate).data;
    }
)

export const deleteDashMember = createAsyncThunk(
    'dashMembers/deleteDashMember',
    async (id) => {
        return await MembersApis.deleteMember(id).data;
    }
)

const dashMembersSlice = createSlice({
    name: 'members',
    initialState,
    extraReducers:{
        [getDashMembers.fulfilled]: (state, action) => {
            state.dashMembers = action.payload;
        }
    }
});

export default dashMembersSlice.reducer;