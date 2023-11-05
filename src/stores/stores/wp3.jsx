import { createSlice } from "@reduxjs/toolkit";

export const wp3 = createSlice({
    name:"wp3",
    initialState:{
        value:false,
    },
    reducers: {
        wptrue3: (state) => {
            state.value = true;
        },
        wpfalse3: (state) => {
            state.value = false;
        },
        
        
    },
});

export const {wptrue3,wpfalse3} = wp3.actions;
export default wp3.reducer;