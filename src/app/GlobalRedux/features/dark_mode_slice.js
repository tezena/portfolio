'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false
}

export const dark_mode_slice = createSlice(
    {
        name: "dark_mode",
        initialState,
        reducers: {
            dark_mode_toggle: (state) => {
          
                state.value=!state.value
            },
            
        }
    }
)

export const { dark_mode_off, dark_mode_toggle } = dark_mode_slice.actions;
export default dark_mode_slice.reducer;