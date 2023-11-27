import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark_mode:false
}

export const dark_mode_reducer = createSlice(
    {
        name: "dark_mode",
        initialState,
        reducers: {
            dark_mode_on:(state) =>{
                state.dark_mode=true
            },
            dark_mode_off: (state) => {
                state.dark_mode=false
            }
        }
    }
)

export const { dark_mode_off, dark_mode_on } = dark_mode_reducer.actions
export default dark_mode_reducer.reducer;