import { configureStore } from "@reduxjs/toolkit";
import surg1Reducer from "./stores/surg1"
import surg2Reducer from "./stores/surg2"
import surg3Reducer from "./stores/surg3"
import wp1Reducer from "./stores/wp1"
import wp2Reducer from "./stores/wp2"
import wp3Reducer from "./stores/wp3"
import tts1Reducer from "./stores/tts1"
import tts2Reducer from "./stores/tts2"
import tts3Reducer from "./stores/tts3"
import openReducer from "./stores/open"


export default configureStore({
    reducer: {
        surg1: surg1Reducer,
        surg2: surg2Reducer,
        surg3: surg3Reducer,
        wp1: wp1Reducer,
        wp2: wp2Reducer,
        wp3: wp3Reducer,
        tts1: tts1Reducer,
        tts2: tts2Reducer,
        tts3: tts3Reducer,
        open: openReducer,

    },
});