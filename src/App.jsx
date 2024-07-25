import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { clearProducts, decrementCount, incrementCount, getProducts } from './store/actions';

function App() {
  const count = useSelector(state => state?.counter?.count);
  const products = useSelector(state => state?.products?.products);
  console.log(products)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount(10));
  };

  const handleDecrement = () => {
    dispatch(decrementCount(10));
  };

  const handleGetProducts = () => {
    dispatch(getProducts());
  };

  const handleClearProducts = () => {
    dispatch(clearProducts());
  };

  return (
    <>
      <h3>Count:</h3>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <hr />
      <h3>Products:</h3>
      {products && (<h4 style={{ color: 'green' }}>Products Count: {products.count}</h4>)}
      {products?.count > 0 && products.products.map(product => (
        <p key={product._id}>{product.name}</p>
      ))}
      <button onClick={handleGetProducts}>Get Products</button>
      <button onClick={handleClearProducts}>Clear Products</button>
    </>
  )
}

export default App
