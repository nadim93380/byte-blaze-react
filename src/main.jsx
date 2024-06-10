import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './page/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './mainLayout/MainLayout.jsx'
import Blogs from './page/Blogs.jsx'
import Bookmarks from './page/Bookmarks.jsx'
import Blog from './page/Blog.jsx'
import Content from './components/Content.jsx'
import Author from './components/Author.jsx'


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
        path: '/blog/:id',
        element: <Blog></Blog>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index:true,
            element: <Content></Content>,
          },
          {
            path: 'author',
            element:<Author></Author>
          }
        ]
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
