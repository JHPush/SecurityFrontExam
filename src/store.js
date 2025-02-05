import { configureStore } from "@reduxjs/toolkit";
import loginSlicer from "./slice/loginSlicer";

const store = configureStore({
    reducer:{
        "loginSlicer": loginSlicer // loginSlicer.reducer 등록
    }
})

export default store;