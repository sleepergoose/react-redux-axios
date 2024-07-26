import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './components/products.jsx';
import Filtered from './components/filtered.jsx';
import Login from './components/login.jsx'
import AuthGuard from './guards/auth.guard.jsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <AuthGuard component={<App />} />,
    children: [
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/filtered',
        element: <Filtered />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
