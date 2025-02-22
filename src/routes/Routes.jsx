import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Layout from './../layout/Layout';
import AllTask from '../components/AllTask';
import AddTask from '../components/AddTask';

const Routes = () => {
    const route = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/task',
                    element: <AllTask />
                },
                {
                    path: '/addtask',
                    element: <AddTask />
                },
            ]
        },
    ])
    return (
        <RouterProvider router={route}/>
            
    );
};

export default Routes;