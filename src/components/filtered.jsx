import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProducts } from '../store/actions';

const Filtered = () => {
  const products = useSelector(store => store?.products?.filteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Filtered')
    dispatch(getFilteredProducts());
  }, [dispatch]);

  return (
    <>
      {products && <h3>Filtered product count: {products.count}</h3>}
      <ul>
        {products?.count > 0 && products.products.map(product => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Filtered;