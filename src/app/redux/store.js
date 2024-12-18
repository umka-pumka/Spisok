import { configureStore } from "@reduxjs/toolkit";
import namesReducer from "./slice/namesSlice"
const store = configureStore({
    reducer: {
     names:namesReducer
    },
});

export default store; 
