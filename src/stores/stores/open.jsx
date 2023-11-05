import { createSlice } from "@reduxjs/toolkit";

export const open = createSlice({
    name:"open",
    initialState:{
        value:false,
    },
    reducers: {
        down: (state) => {
            state.value =! state.value;
        },
     
        
        
    },
});

export const {down} = open.actions;
export default open.reducer;