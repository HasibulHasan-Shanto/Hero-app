import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home/Home.jsx';
import Installation from './pages/Installation/Installation.jsx';
import Apps from './pages/Apps/Apps.jsx';
import AppDetails from './pages/AppDetails/AppDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: ()=> fetch('../public/apps.json'),
        Component: Home
      },
      {
        path: '/apps',
        loader: () => fetch('../public/apps.json'),
        Component: Apps
      },
      {
        path: '/apps/:id',
        loader: () => fetch('../public/apps.json'),
        Component: Apps
      },
      {
        path: '/installation',
        Component: Installation
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch('../public/apps.json'),
        Component: AppDetails
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
