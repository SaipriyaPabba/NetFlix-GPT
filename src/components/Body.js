import React from 'react'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'

const Body = () => {
    const AppRouter=createBrowserRouter([{
        path:"/",
        element:<Login/>
    },

    {
        path:"/browse",
        element:<Browse/>
    }]
    )
  return (
    <RouterProvider router={AppRouter}/>
  )
}

export default Body