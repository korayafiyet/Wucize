import { createSlice } from "@reduxjs/toolkit";

export const tts2 = createSlice({
    name:"tts2",
    initialState:{
        value:false,
    },
    reducers: {
        ttstrue2: (state) => {
            state.value = true;
        },
        ttsfalse2: (state) => {
            state.value = false;
        },
        
        
    },
});

export const {ttstrue2,ttsfalse2} = tts2.actions;
export default tts2.reducer;