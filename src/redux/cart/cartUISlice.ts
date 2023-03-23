import { createSlice } from "@reduxjs/toolkit";

export interface CartUIState {
    cartIsVisible: boolean 
}

const initialState: CartUIState = {
    cartIsVisible: false
}

const cartUISlice = createSlice({
    name: 'cartUI',
    initialState,
    reducers: {
        toggleCartUI: (state) => {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export const { toggleCartUI } = cartUISlice.actions

export default cartUISlice.reducer