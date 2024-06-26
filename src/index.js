import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Blog from "./Blog/Blog";
import BlogDetail from "./Blog/BlogDetail";
import ActionRegister from "./Form_regis_login/Index";
import ActionLogin from "./Form_regis_login/login";
import UpdateAccount from "./UserAccount/UpdateAccount";
import AddProduct from "./Product/addProduct";
import GetMyProduct from "./Product/getProduct";
import EditProduct from "./Product/editProduct";
import HomeProduct from "./Product/homeProduct";
import DetailProduct from "./Product/detailProduct";
import ShowCart from "./Product/Cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route
            path="/account/update"
            element={<UpdateAccount></UpdateAccount>}
          />
          <Route path="/cart" element={<ShowCart></ShowCart>} />
          <Route
            path="/account/edit-product/:id"
            element={<EditProduct></EditProduct>}
          ></Route>
          <Route
            path="/home-page"
            element={<HomeProduct></HomeProduct>}
          ></Route>
          <Route
            path="/product/detail-product/:id"
            element={<DetailProduct></DetailProduct>}
          ></Route>
          <Route
            path="/account/my-product"
            element={<GetMyProduct></GetMyProduct>}
          />
          <Route
            path="/account/add-product"
            element={<AddProduct></AddProduct>}
          />
          <Route path="/blog-list" element={<Blog></Blog>} />
          <Route path="/blog-detail/:id" element={<BlogDetail></BlogDetail>} />
          <Route path="/register" element={<ActionRegister></ActionRegister>} />
          <Route path="/login" element={<ActionLogin></ActionLogin>} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
