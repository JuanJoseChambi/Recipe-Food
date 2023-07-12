import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:""
};

export const userSlice = createSlice ({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            const name = action.payload;
            state.user = name;
        },
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;