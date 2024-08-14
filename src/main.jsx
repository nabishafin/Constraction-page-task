import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import About from './Components/Pages/About';
import Industry from './Components/Pages/Industry';
import Contact from './Components/Pages/Contact';
import Construction from './Components/Home/Construction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "//industry",
        element: <Industry></Industry>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/construction",
        element: <Construction></Construction>,
      },
    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
