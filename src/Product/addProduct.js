import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [errors, setErorrs] = useState({});
  const [checkLogin, setCheckLogin] = useState(null);
  const [files, setFiles] = useState(null);
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const [dataBrand, setDataBrand] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [inputs, setInputs] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    brand: "",
    sale: "",
    company: "",
    detail: "",
    status: "1",
  });
  useEffect(() => {
    let dataUser = localStorage.getItem("checkLogin");
    if (dataUser) {
      dataUser = JSON.parse(dataUser);
      setIsLogin(true);
      setAccessToken(dataUser.token);
      setCheckLogin(dataUser);
    }
    const GetData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/laravel8/public/api/category-brand"
        );
        setDataBrand(response.data.brand);
        setDataCategory(response.data.category);
      } catch (error) {
        console.log("co loi  : ".error);
      }
    };
    GetData();
  }, []);
  function checkLoginUser() {
    if (isLogin) {
      console.log("Đã login");
      return true;
    } else {
      navigate("/login");
      return false;
    }
  }

  //   const handleUserInputFile = (e) => {
  //     const file = e.target.files[0];

  //     if (file) {
  //       const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];
  //       if (!validImageTypes.includes(file.type)) {
  //         alert("không đúng định dạng");
  //         return;
  //       }

  //       const fileSizeMB = file.size / (1024 * 1024);
  //       if (fileSizeMB > 1) {
  //         alert("vượt quá 1MB rồi");
  //         return;
  //       }

  //       let reader = new FileReader();
  //       reader.onload = (e) => {
  //         setAvatar(e.target.result);
  //         setFiles(file);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  const handleUserInputFile = (e) => {
    const files = Array.from(e.target.files);
    const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];
    let error = false;

    if (files.length > 3) {
      alert("Bạn chỉ có thể tải lên tối đa 3 ảnh");
      error = true;
    }

    files.forEach((file) => {
      if (!validImageTypes.includes(file.type)) {
        alert("không đúng định dạng");
        error = true;
      }

      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > 1) {
        alert("vượt quá 1MB rồi");
        error = true;
      }
    });

    if (!error) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(files[0]);

      setFiles(files); // Lưu trữ mảng tệp
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkLoginUser()) return;
    let errorSubmit = {};
    let flag = true;

    if (inputs.name === "") {
      errorSubmit.name = "Vui Long Nhap Ten";
      flag = false;
    }
    if (inputs.brand === "") {
      errorSubmit.brand = "Vui Long Nhap brand";
      flag = false;
    }
    if (inputs.category === "") {
      errorSubmit.category = "Vui Long Nhap category";
      flag = false;
    }
    if (inputs.company === "") {
      errorSubmit.company = "Vui Long Nhap company";
      flag = false;
    }
    if (inputs.price === "") {
      errorSubmit.price = "Vui Long Nhap gia";
      flag = false;
    }
    if (inputs.sale === "") {
      errorSubmit.sale = "Vui Long Nhap sale";
      flag = false;
    }
    if (inputs.status === "") {
      errorSubmit.status = "Vui Long Nhap trang thai";
      flag = false;
    }
    if (inputs.detail === "") {
      errorSubmit.detail = "Vui Long Nhap mota";
      flag = false;
    }

    if (!files || files.length === 0) {
      errorSubmit.avatar = "hãy thêm ảnh vào";
      flag = false;
    }

    if (!flag) {
      setErorrs(errorSubmit);
    } else {
      setErorrs({});
      try {
        let url = "http://localhost/laravel8/public/api/user/product/add";
        let config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "multipart/form-data",
            Accept: "application/json",
          },
        };
        const formData = new FormData();
        formData.append("id_user", checkLogin.Auth.id);
        formData.append("name", inputs.name);
        formData.append("brand", inputs.category);
        formData.append("category", inputs.brand);
        formData.append("price", inputs.price);
        formData.append("status", inputs.status);
        formData.append("sale", inputs.sale);
        formData.append("detail", inputs.detail);
        formData.append("company", inputs.company);

        Object.keys(avatar).map((item, i) => {
          formData.append("file[]", avatar[item]);
          console.log(avatar);
        });

        const response = await axios.post(url, formData, config);
        console.log(response);
      } catch {
        console.error("Error add product:", errors);
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
          <h2 className="title text-center">My Product</h2>
          <div className="signup-form">
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
              <input
                value={inputs.name}
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                value={inputs.price}
                name="price"
                type="number"
                placeholder="Price"
                onChange={handleChange}
              />
              <select
                value={inputs.category}
                name="category"
                onChange={handleChange}
              >
                <option value="0">Hãy chọn category</option>
                {dataCategory.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.category}
                  </option>
                ))}
              </select>

              <select value={inputs.brand} name="brand" onChange={handleChange}>
                <option value="0">Hãy chọn brand</option>
                {dataBrand.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.brand}
                  </option>
                ))}
              </select>

              <select
                value={inputs.status}
                name="status"
                onChange={handleChange}
              >
                <option value="1">new</option>
                <option value="0">sale</option>
              </select>
              <input
                value={inputs.sale}
                name="sale"
                type="text"
                placeholder="Sale"
                onChange={handleChange}
              />
              <input
                value={inputs.company}
                name="company"
                type="text"
                placeholder="Company"
                onChange={handleChange}
              />
              <textarea
                value={inputs.detail}
                name="detail"
                placeholder="Detail"
                onChange={handleChange}
              />
              <input
                multiple
                type="file"
                placeholder="avatar"
                onChange={handleUserInputFile}
              />
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
export default AddProduct;
