import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import MasterLayout from "../MasterLayout/MasterLayout";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ProductDetails from "../productDetails/ProductDetails";
import PaymentOnline from "../PaymentOnline/PaymentOnline";
import { BounceLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  
  const routes = createHashRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Cart", element: <Cart /> },
        { path: "Products", element: <Products /> },
        { path: "Login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "PaymentOnline", element: <PaymentOnline /> },
        { path: "productDetails/:id", element: <ProductDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      {loading ? (
        <div className=" d-flex justify-content-center align-items-center  min-vh-100">
          <BounceLoader color="#36d7b7" />
        </div>
      ) : (
        <RouterProvider router={routes} />
      )}
    </>
  );
};

export default App;
