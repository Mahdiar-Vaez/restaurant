import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeAll: (state) => {
      state.list = [];
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((e) => {
        if (e.id === action.payload) {
          e.quantity = e.quantity - 1;
          if (e.quantity === 0) {
            return false;
          }
          return e;
        }
        return e;
      });
    },
    addItem: (state, action) => {
      const itemIndex = state.list.findIndex((e) => e.id === action.payload.id);
      if (itemIndex !== -1) {
        state.list[itemIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export default cartSlice.reducer;
export const { removeAll, removeItem, addItem } = cartSlice.actions;