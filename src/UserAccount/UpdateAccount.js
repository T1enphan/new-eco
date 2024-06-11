import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateAccount() {
  const [isLogin, setIsLogin] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    let userData = localStorage.getItem("checkLogin");
    if (userData) {
      userData = JSON.parse(userData);
      setIsLogin(true);
      setAccessToken(userData.token);
      const userAuth = userData.Auth;
      setUser({

        id: userAuth.id,
        name: userAuth.name,
        email: userAuth.email,
        password: userAuth.password,
        address: userAuth.address,
        phone: userAuth.phone,
      });
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

  const handleUserInputFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];
      if (!validImageTypes.includes(file.type)) {
        alert("không đúng định dạng");
        return;
      }

      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > 1) {
        alert("vượt quá 1MB rồi");
        return;
      }

      let reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
        setFiles(file);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((state) => ({ ...state, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkLoginUser()) return;

    let errorSubmit = {};
    let flag = true;

    if (user.name === "") {
      errorSubmit.name = "vui lòng nhập tên";
      flag = false;
    }

    if (user.email === "") {
      errorSubmit.email = "vui lòng nhập email";
      flag = false;
    }
    if (user.phone === "") {
      errorSubmit.phone = "vui lòng nhập số điện thoại";
      flag = false;
    }

    if (user.address === "") {
      errorSubmit.address = "vui lòng nhập địa chỉ";
      flag = false;
    }

    if (!files) {
      errorSubmit.avatar = "hãy thêm ảnh vào";
      flag = false;
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});

      try {
        let url = `http://localhost/laravel8/public/api/user/update/${user.id}`;
        let config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        };

        const formData = new FormData();
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("address", user.address);
        formData.append("password", user.password);
        formData.append("phone", user.phone);
        formData.append("avatar", files);

        const response = await axios.post(url, formData, config);
        console.log("User updated successfully:", response.data);
        // Handle success (e.g., navigate to another page or show a success message)
      } catch (error) {
        console.error("Error updating user:", error.response ? error.response.data : error.message);
        // Handle error (e.g., show an error message)
      }
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
              <input type="file" placeholder="avatar" onChange={handleUserInputFile} />
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
