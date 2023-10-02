import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import About from './pages/About'
import Work from './pages/Work'
import Home from './pages/Home'
import Testimonials from './pages/Testimonials'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/work', element: <Work /> },
      { path: '/about', element: <About /> },
      { path: '/testimonials', element: <Testimonials /> },
      { path: '/contact', element: <Contact /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
