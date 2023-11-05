import { createSlice } from "@reduxjs/toolkit";

export const tts1 = createSlice({
    name:"tts1",
    initialState:{
        value:true,
    },
    reducers: {
        ttstrue1: (state) => {
            state.value = true;
        },
        ttsfalse1: (state) => {
            state.value = false;
        },
        
        
    },
});

export const {ttstrue1,ttsfalse1} = tts1.actions;
export default tts1.reducer;