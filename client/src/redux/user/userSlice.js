import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    currentUser : null,
    loading : false,
    error : false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },

        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },

        signInFailure: (state) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateUserStart: (state) => {
            state.loading = true;
        },

        updateUserSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.currentUser = action.payload;
        },

        updateUserFailure: (state) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart: (state) => {
            state.loading = true;
        },

        deleteUserSuccess: (state) => {
            state.loading = false;
            state.error = false;
            state.currentUser = null;
        },

        deleteUserFailure: (state) => {
            state.loading = false;
            state.error = action.payload;
        },
    }

});

export const { signInStart, signInSuccess, signInFailure, updateUserFailure, updateUserStart, updateUserSuccess, deleteUserStart, deleteUserSuccess, deleteUserFailure } = userSlice.actions;

export default userSlice.reducer