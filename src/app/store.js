import { configureStore } from "@reduxjs/toolkit";
import dark_mode_reducer from "./features/dark_mode_slice";

const store = configureStore({
    reducer: {
        dark_mode:dark_mode_reducer
    }
})

export default store;