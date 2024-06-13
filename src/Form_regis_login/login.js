import axios from "axios";
import { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
function ActionLogin() {
  const navigate = useNavigate();
  const [error, setErros] = useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (input.email === "") {
      errorSubmit.email = "vui long nhap email";
      console.log((errorSubmit.email = "vui long nhap email"));
      flag = false;
    }
    if (input.password === "") {
      errorSubmit.password = "vui long nhap password";
      console.log((errorSubmit.password = "vui long nhap password"));
      flag = false;
    }
    if (!flag) {
      setErros(errorSubmit);
    } else {
      setErros({});
      const data = {
        email: input.email,
        password: input.password,
        level: 0,
      };
      axios
        .post("http://localhost/laravel8/public/api/login", data)
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            setErros(res.data.error);
          } else {
            console.log(res);
            localStorage.setItem("checkLogin", JSON.stringify(res.data));
            navigate("/blog-list");
          }
        });
    }
  };
  return (
    <>
      <section id="form">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-1">
              <div className="login-form">
                <h2>Login to your account</h2>
                <form onSubmit={handleSumbit}>
                  <input
                    type="email"
                    value={input.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    value={input.password}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <span>
                    <input type="checkbox" className="checkbox" />
                    Keep me signed in
                  </span>
                  <button type="submit" className="btn btn-default">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ActionLogin;
