import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/slices/products.slice';


const Products = () => {
  const productsData = useSelector(store => store?.products?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Products')
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {productsData?.isLoading && (<h1>Loading...</h1>)}
      {(productsData?.data && !productsData?.isLoading) && <h3>Product count: {productsData.data.count}</h3>}
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

export default Products;