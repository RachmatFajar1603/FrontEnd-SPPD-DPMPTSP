import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import ErrorPage from './Pages/404.jsx'
import DashboardPage from './Pages/dashboard.jsx'
import FormPengajuan from './Pages/formPengajuan.jsx'

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
    path: '/dashboard',
    element: <DashboardPage/>,
  },
  {
    path: '/formPengajuan',
    element: <FormPengajuan/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
