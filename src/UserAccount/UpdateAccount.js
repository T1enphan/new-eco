import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function UpdateAccount() {
  const [isLogin, setIsLogin] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [errors, SetErrors] = useState({});
  const [files, setFiles] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    let userData = localStorage.getItem("checkLogin");
    if (userData) {
      // const parsedLogin = JSON.parse(storedLogin);
      setIsLogin(true);
      userData = JSON.parse(userData);
      console.log(userData);
      userData = userData.Auth;
      setUser({
        name: userData.name,
        email: userData.email,
        address: userData.address,
        phone: userData.phone,
      });
      // gán dữ liệu từ localStorage vào setUser(input)
    }
  }, []);

  const checkLoginUser = () => {
    if (isLogin) {
      console.log("oke đã login");
      return true;
    } else {
      console.log("Chưa login");
      navigate("/login");
      return false;
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((state) => ({ ...state, [name]: value }));
  }

  const handleSubmit = (e) => {
    checkLoginUser();
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
    if (user.name === "") {
      errorSubmit.name = "vui long nhap name";
      flag = false;
    }

    if (user.email === "") {
      errorSubmit.email = "vui long nhap email";
      flag = false;
    }

    if (user.password === "") {
      errorSubmit.password = "vui long nhap password";
      flag = false;
    }
    if (user.phone === "") {
      errorSubmit.phone = "vui long nhap phone";
      flag = false;
    }

    if (user.address === "") {
      errorSubmit.address = "vui long nhap dia chi";
      flag = false;
    }

    if (!flag) {
      SetErrors(errorSubmit);
    } else {
      SetErrors({});
    }
  };

  function renderError() {
    if (Object.keys(errors).length > 0) {
      return Object.keys(errors).map((key, index) => {
        return <li key={index}>{errors[key]}</li>;
      });
    }
  }

  return (
    <>
      {renderError()}
      <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">Update user</h2>
          <div className="signup-form">
            <h2>User Update!</h2>
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                value={user.name}
                type="text"
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                name="email"
                value={user.email}
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
              <input
                name="password"
                value={user.password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <input
                name="address"
                value={user.address}
                type="text"
                placeholder="Address"
                onChange={handleChange}
              />
              <input
                name="phone"
                value={user.phone}
                type="number"
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <input type="file" placeholder="Avatar" onChange={handleChange} />
              <button type="submit" className="btn btn-default">
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpdateAccount;
