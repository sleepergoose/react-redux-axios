import { Outlet } from 'react-router-dom'
import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <button onClick={() => handleClick('/filtered')}>Paginated Products</button>
      <hr />
      <button onClick={() => handleClick('/products')}>Filtered Products</button>
      <Outlet />
    </>
  )
}

export default App
