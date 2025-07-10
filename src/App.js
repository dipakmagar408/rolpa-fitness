import React from 'react'
import Header from './Ui/Header'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RouteLayout from './Ui/RouteLayout'
import Home from './Features/Home'
import Accout from './Features/Accout'

const router = createBrowserRouter([{
  path:'/',
  element:<RouteLayout/>,
  children:[
    {index:true, element:<Home/>},
    {path:'home', element:<Home/>},
    {path:'account',element:<Accout/>}
  ]

}])
const App = () => {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
