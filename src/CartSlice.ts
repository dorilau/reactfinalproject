import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Plant = {
  title: string;
  image: string;
  price: number;
};

type CartState = {
  items: Plant[];
  totalPrice: number;
};

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Plant>) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
