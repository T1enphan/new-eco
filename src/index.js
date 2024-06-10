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
