import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './ErrorPage.jsx'
const Home = lazy(()=>import('./components/home.jsx/Home.jsx'));
const News = lazy(()=>import("./components/News/News.jsx"));

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/",
        element:<Home />,
      },
      {
        path: "/News",
        element:<News/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
