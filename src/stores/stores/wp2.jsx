import { createSlice } from "@reduxjs/toolkit";

export const wp2 = createSlice({
    name:"wp2",
    initialState:{
        value:false,
    },
    reducers: {
        wptrue2: (state) => {
            state.value = true;
        },
        wpfalse2: (state) => {
            state.value = false;
        },
        
        
    },
});

export const {wptrue2,wpfalse2} = wp2.actions;
export default wp2.reducer;