import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./components/noteSlice";

const store =  configureStore({
    reducer :{
        note:noteSlice
    }
})

export default store