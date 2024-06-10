import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './page/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './mainLayout/MainLayout.jsx'
import Blogs from './page/Blogs.jsx'
import Bookmarks from './page/Bookmarks.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: ()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: '/bookmarks',
        element:<Bookmarks></Bookmarks>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
