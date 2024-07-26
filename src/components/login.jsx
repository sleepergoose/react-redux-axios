import { useDispatch } from 'react-redux';
import './styles.css';
import { getAuthAction } from '../store/slices/auth.slice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const authState = useSelector(store => store?.auth?.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(getAuthAction());
  };

  useEffect(() => {
    const navigateAfterLogin = () => {
      if (authState?.loginSuccess) {
        navigate('/');
      }
    }

    navigateAfterLogin();
  }, [authState.loginSuccess, navigate])

  return (
    <>
      <div className="container">
        <h2>Since this is simply a draft project and this very login page is a mock one, let&apos;s skip input fields :) </h2>
        {!authState?.isLoading && (<button onClick={handleLogin}>Log In</button>)}
        {authState?.isLoading && (<h3>Loading...</h3>)}
        {authState?.errors && (<h3>{authState.errors?.payload?.message}</h3>)}
      </div>
    </>
  );
}

export default Login;