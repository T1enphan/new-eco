import { useState } from "react";
import axios from "axios";

function ActionRegister() {
  const [files, setFiles] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    level: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  }

  const handleUserInputFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];
      if (!validImageTypes.includes(file.type)) {
        alert("khong dung dinh dang");
        return;
      }

      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > 1) {
        alert("vuot qua 1MB roi");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (input.name === "") {
      errorSubmit.name = "vui long nhap name";
      flag = false;
    }

    if (input.email === "") {
      errorSubmit.email = "vui long nhap email";
      flag = false;
    }

    if (input.password === "") {
      errorSubmit.password = "vui long nhap password";
      flag = false;
    }
    if (input.phone === "") {
      errorSubmit.phone = "vui long nhap phone";
      flag = false;
    }

    if (input.address === "") {
      errorSubmit.address = "vui long nhap dia chi";
      flag = false;
    }

    if (input.level === "") {
      errorSubmit.level = "vui long nhap level";
      flag = false;
    }

    if (!files) {
      errorSubmit.avatar = "hay them anh vao";
      flag = false;
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});

      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("email", input.email);
      formData.append("password", input.password);
      formData.append("phone", input.phone);
      formData.append("address", input.address);
      formData.append("level", input.level);
      formData.append("avatar", files);



      //  // Log the avatar object
      // for (let [key, value] of formData.entries()) {
      //   if (key === "avatar") {
      //     console.log(`${key}:`, value);
      //   }
      // }


      axios
        .post("https://localhost/laravel8/public/api/register", formData, {
          headers: {
            "data-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          setInput({
            name: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            level: "",
          });
          setFiles(null);
          setAvatar("");
        })
        .catch((error) => {
          console.error("Có lỗi rồi anh em :", error);
        });
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
      <section id="form">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="signup-form">
                <h2>New User Signup!</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={input.name}
                    onChange={handleChange}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={input.email}
                    onChange={handleChange}
                  />
                  <input
                    name="password"
                    type="text"
                    placeholder="Password"
                    value={input.password}
                    onChange={handleChange}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={input.phone}
                    onChange={handleChange}
                  />
                  <input
                    name="address"
                    type="text"
                    placeholder="Address"
                    value={input.address}
                    onChange={handleChange}
                  />
                  <input
                    name="level"
                    type="number"
                    placeholder="Level"
                    value={input.level}
                    onChange={handleChange}
                  />
                  <input
                    type="file"
                    placeholder="File avatar"
                    onChange={handleUserInputFile}
                  />
                  {avatar && (
                    <img src={avatar} alt="Avatar preview" width="100" />
                  )}
                  <button type="submit" className="btn btn-default">
                    Signup
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

export default ActionRegister;
