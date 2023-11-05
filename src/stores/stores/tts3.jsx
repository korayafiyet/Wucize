import { createSlice } from "@reduxjs/toolkit";

export const tts3 = createSlice({
    name:"tts3",
    initialState:{
        value:false,
    },
    reducers: {
        ttstrue3: (state) => {
            state.value = true;
        },
        ttsfalse3: (state) => {
            state.value = false;
        },
        
        
    },
});

export const {ttstrue3,ttsfalse3} = tts3.actions;
export default tts3.reducer;