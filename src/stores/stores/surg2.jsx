import { createSlice } from "@reduxjs/toolkit";

export const surg2 = createSlice({
    name:"surg2",
    initialState:{
        value:false,
    },
    reducers: {
        true2: (state) => {
            state.value = true;
        },
        false2: (state) => {
            state.value = false;
        },
        
        
    },
});

export const {true2,false2} = surg2.actions;
export default surg2.reducer;
