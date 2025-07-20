import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteLayout from './Ui/RouteLayout';
import Home from './Ui/Home';
import Service from './Features/Service';
import Account from './Features/Accout';
import Login from './Features/Login';
import Signup from './Features/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout />,
    children: [
      { index: true, element: <Home /> },       // Home page at '/'
      { path: 'service', element: <Service /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path:'account',element:<Account/>}
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
