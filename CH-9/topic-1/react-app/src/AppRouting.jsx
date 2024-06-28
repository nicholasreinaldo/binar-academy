import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ToDoList from './pages/ToDoList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/to-do-list',
    element: <ToDoList />,
  },
])

export default function AppRouting() {
  return <RouterProvider router={router} />
}
