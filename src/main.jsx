import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import ErrorPage from './Pages/404.jsx'
import HomePage from './Pages/home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello industrious reader!</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>,
  },
  {
    path:'/home',
    element:<HomePage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
