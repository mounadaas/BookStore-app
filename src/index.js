import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';
import reportWebVitals from './reportWebVitals';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Bloges from './routes/Bloges';
import Hero from './routes/Hero';
import Dashboard from './routes/Dashboard';
import { Provider } from 'react-redux';
import { store } from './store/index';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Bookdetail from './routes/Bookdetail';
import { ContextProvider } from './context/Auth';
import Profile from './routes/Profile';
import RequireAuth from './component/RequireAuth';
import ShopingCartProvider from './context/ShopingCartContext';
import AddtoCard from './routes/AddtoCard';


const routes= createBrowserRouter([

  {
    path:'/',
    element: <Root/>,
    errorElement: <div>not found this page</div>,
    children:[
      {index:true, element:   <Hero/>
       },
      {
        path:'blog',
        element: <Bloges/>,
      },
      {
        path:'dashboard',
        element: <Dashboard/>
      },
      {
        path:'card',
        element: <RequireAuth><AddtoCard/></RequireAuth>
      },
      {
        path:'profile',
        element: <RequireAuth><Profile/></RequireAuth> 
      },
      {
        path:'signup',
        element: <Signup/>
      },
      {
        path:':bookId',
         element:<Bookdetail/>
      }
    ]
  },
  {
    path:'/signin',
    element: <Root/>,
    children:[
      {index:true, element:   <Login/>
    },
  ]
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopingCartProvider>
    <ContextProvider>
      <Provider store ={store} >
        <RouterProvider router={routes} />
      </Provider>
    </ContextProvider>
  </ShopingCartProvider>

);
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
