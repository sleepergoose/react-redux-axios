import productsReducer from './slices/products.slice';
import authReducer from './slices/auth.slice';

const rootReducer = {
  products: productsReducer,
  auth: authReducer,
};


export default rootReducer;