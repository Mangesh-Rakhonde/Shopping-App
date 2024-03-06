import {createSlice} from '@reduxjs/toolkit';
import ProductData from '../ProductData';


const CartSlice = createSlice({
    name:'carts',
    initialState:{
        cart:[],
        items:ProductData,
        totalPrice:0,
        totalQuantity:0,
    },
    reducers:{
        addToCart(state,action){
            state.cart.push(action.payload);
        

        },
        //we will write functionality/ logic
    }
});

export default CartSlice;
export const {addToCart} =CartSlice.actions;
