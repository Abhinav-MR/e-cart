import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            // eslint-disable-next-line no-unused-vars
            return state=[]
        }

    }
})

export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer
