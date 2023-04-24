// jshint esversion:6
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// create interface for the initial state
interface ModalState {
    isOpen: boolean
}

// create the initial state
const initialState: ModalState = {
    isOpen: false
}

// create the slice
const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    }
})

// Export slice reducer actions
export const { openModal, closeModal } = modalSlice.actions;

// Export the reducer to the redux global store
export const modalReducer = modalSlice.reducer