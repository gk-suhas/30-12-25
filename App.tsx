import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import EntryPoint from './EntryPoint'
import Admin from './Admin'
import Student from './Student'
import { store } from './redux/Store'
const router=createBrowserRouter([
  {
    path:'/',
    element:<EntryPoint/>
  },
  {
    path:'/admin',
    element:<Admin/>
  },
  {
    path:'/student',
    element:<Student/>
  }
])
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App