import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CartItemType } from "../data";
import axios from "axios";

// Create the interface for the initial state
interface CartState {
    cartItems: CartItemType[]
    amount: number
    total: number
    isLoading: boolean
    error: unknown | undefined
}

// Create the initial state for the slice
const initialState: CartState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: false,
    error: ""
}

const url = "https://course-api.com/react-useReducer-cart-projecto";

export const getCartItems = createAsyncThunk("cart/getCartItems", async (_, thunkAPI) => {
    // console.log(thunkAPI);
    // thunkAPI.dispatch(openModal())

    try {
        const response = await axios(url);
        return response.data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(`An error occurred: ${error.message}`)
    }
})

// Create a slice - returns a object with the following properties
// {name, actions, caseReducers, getInitialState, reducer}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Action to clear cart items
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, { payload }) => {
            const itemId = payload.id;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem!.amount = cartItem!.amount + 1;
        },//   dispatch(getCartItems());
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem!.amount = cartItem!.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * parseFloat(item.price);
            })
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading = true
            state.error = ""
            state.cartItems = []
        })
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false,
                state.cartItems = (action.payload);
            state.error = "";
        })
        builder.addCase(getCartItems.rejected, (state, action) => {
            state.isLoading = false,
                state.cartItems = [],
                state.error = action.payload
        })
    }
})

// Export your reducer actions
export const cartActions = cartSlice.actions;

// Export the reducer from slice to use in the store
export const cartReducer = cartSlice.reducer;