import { createSlice } from "@reduxjs/toolkit";

export const wp1 = createSlice({
    name:"wp1",
    initialState:{
        value:true,
    },
    reducers: {
        wptrue1: (state) => {
            state.value = true;
        },
        wpfalse1: (state) => {
            state.value = false;
        },
        
        
    },
});

export const {wptrue1,wpfalse1} = wp1.actions;
export default wp1.reducer;