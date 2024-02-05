import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }
            // получить сумму всех товаров в корзине
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },


        minusItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload)
            if (findItem) {
                findItem.count--;
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return (obj.price * obj.count) + sum;
                }, 0)
            }
        },
        // удаление по кнопке минус
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        // полное удаление корзины
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    }
})


export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions

export default cartSlice.reducer