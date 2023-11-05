import { createSlice } from "@reduxjs/toolkit";

export const surg3 = createSlice({
    name:"surg3",
    initialState:{
        value:false,
    },
    reducers: {
        true3: (state) => {
            state.value = true;
        },
        false3: (state) => {
            state.value = false;
        },
        
        
    },
});

export const {true3,false3} = surg3.actions;
export default surg3.reducer;