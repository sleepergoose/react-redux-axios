import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProductsAction } from '../store/slices/products.slice';


const Filtered = () => {
  const productsData = useSelector(store => store?.products?.filteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredProductsAction());
  }, [dispatch]);

  return (
    <>
      {productsData?.isLoading && (<h1>Loading...</h1>)}
      {(productsData?.data && !productsData?.isLoading) && <h3>Filtered product count: {productsData.data.count}</h3>}
      <ul>
        {productsData?.data?.count > 0 && productsData.data.products.map(product => (
          <li key={product._id} style={{
            listStyle: 'none',
            textAlign: 'left',
          }}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Filtered;