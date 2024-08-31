import "./App.css";
import React, { Children } from "react";
import { createBrowserRouter, Routes, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import { Provider, useSelector } from "react-redux";
import store from "../store.js";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Shop from "./Pages/shop/Shop.jsx";
import Adminlayout from "./Components/adminlayout/Adminlayout.jsx";
import Allproducts from "./Components/Allproducts/Allproducts.jsx";
import Addproduct from "./Components/AdminComponents/Addproduct/Addproduct.jsx";

const Userprotecter = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (user == null) {
    return <Login />;
  } else {
    return children;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <Userprotecter>
      <Layout />
      // </Userprotecter>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/admin/*",
    element: <Adminlayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
