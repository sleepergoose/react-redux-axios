import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions';

const Products = () => {
  const products = useSelector(store => store?.products?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Products')
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {products && <h3>Product count: {products.count}</h3>}
      <ul>
        {products?.count > 0 && products.products.map(product => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Products;