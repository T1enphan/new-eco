import axios from "axios";
import { useState, useEffect } from "react";

function ActionLogin() {
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
      flag = false;
    }
    if (input.password === "") {
      errorSubmit.password = "vui long nhap password";
      flag = false;
    }
    if (!flag) {
      setErros(errorSubmit);
    }
  };

  return (
    <>
      <form>
        <section id="form">
          <div class="container">
            <div class="row">
              <div class="col-sm-4 col-sm-offset-1">
                <div class="login-form">
                  <h2>Login to your account</h2>
                  <form>
                    <input type="email" value="" placeholder="Email" />
                    <input type="text" value="" placeholder="Password" />
                    <span>
                      <input type="checkbox" class="checkbox" />
                      Keep me signed in
                    </span>
                    <button type="submit" class="btn btn-default">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
export default ActionLogin;
