import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
])

export default function AppRouting() {
  return <RouterProvider router={router} />
}
