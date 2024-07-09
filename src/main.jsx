import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './pages/Product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path : '/',
        element : <Product/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
