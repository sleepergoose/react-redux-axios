import { createSlice } from '@reduxjs/toolkit';

const productsInitialState = {
  products: {
    data: null,
    isLoading: false,
    errors: '',
  },
  filteredProducts: {
    data: null,
    isLoading: false,
    errors: '',
  }
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    getProducts: (state) => {
      state.products.isLoading = true;
      state.products.errors = '';
    },
    setProductsSuccessAction: (state, { payload }) => {
      state.products.isLoading = false;
      state.products.data = payload;
    },
    setProductsErrorActions: (state, error) => {
      state.products.isLoading = false;
      state.products.errors = error;
    },
    getFilteredProductsAction: (state) => {
      state.filteredProducts.isLoading = true;
      state.filteredProducts.errors = '';
    },
    setFilteredProductsSuccessAction: (state, { payload }) => {
      state.filteredProducts.isLoading = false;
      state.filteredProducts.data = payload;
    },
    setFilteredProductsErrorActions: (state, error) => {
      state.filteredProducts.isLoading = false;
      state.filteredProducts.errors = error;
    },
  }
});

export const {
  getProducts,
  setProductsSuccessAction,
  setProductsErrorActions,
  getFilteredProductsAction,
  setFilteredProductsSuccessAction,
  setFilteredProductsErrorActions,
} = productsSlice.actions;

export default productsSlice.reducer;
