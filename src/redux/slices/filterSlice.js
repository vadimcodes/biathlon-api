import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sort: {
    // пагинация
    // currentPage: 1,
    // сортировка
    name: 'популярности',
    sortProperty: 'rating',
  }
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSort(state, action) {
      state.sort = action.payload;
    },
    // setCurrentPage(state, action) {
    //   state.currentPage = action.payload;
    // }
  }
})


export const { setSort } = filterSlice.actions

export default filterSlice.reducer