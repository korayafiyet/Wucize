import { createSlice } from "@reduxjs/toolkit";

export const surg1 = createSlice({
    name:"surg1",
    initialState:{
        value:true,
    },
    reducers: {
        true1: (state) => {
            state.value = true;
        },
        false1: (state) => {
            state.value = false;
        },
        
        
    },
});

export const {true1,false1} = surg1.actions;
export default surg1.reducer;
