import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProduct(prop) {
  const [accessToken, setAccessToken] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [errors, setErrors] = useState({});
  const [checkLogin, setCheckLogin] = useState(null);
  const [dataBrand, setDataBrand] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataProduct, setDataProduct] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    brand: "",
    sale: "",
    company: "",
    detail: "",
    status: "1",
    images: [],
  });
  const [selectedImagesToDelete, setSelectedImagesToDelete] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [fileError, setFileError] = useState("");

  let params = useParams();

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

        setDataProduct((prevDataProduct) => ({
          ...prevDataProduct,
          category:
            response.data.category.length > 0
              ? response.data.category[0].id
              : "",
          brand:
            response.data.brand.length > 0 ? response.data.brand[0].id : "",
        }));
      } catch (error) {
        console.log("co loi: ", error);
      }
    };

    const DataProductByID = async () => {
      const headers = {
        Authorization: `Bearer ${dataUser.token}`,
      };
      try {
        const response = await axios.get(
          "http://localhost/laravel8/public/api/user/product/" + params.id,
          { headers }
        );
        setDataProduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    DataProductByID();
    GetData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataProduct((state) => ({ ...state, [name]: value }));
  };

  // const handleCheckboxChange = (e) => {
  //   const { value, checked } = e.target;
  //   setSelectedImagesToDelete((prev) =>
  //     checked ? [...prev, value] : prev.filter((img) => img !== value)
  //   );
  //   console.log(selectedImagesToDelete);
  // };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    // Clone the array and update based on checked state
    setSelectedImagesToDelete((prev) => {
      if (checked) {
        return [...prev, value]; // Add image name to array
      } else {
        return prev.filter((img) => img !== value); // Remove image name from array
      }
    });
  };

  const handleUserInputFile = (e) => {
    const files = Array.from(e.target.files);
    if (
      files.length +
        dataProduct.images.length -
        selectedImagesToDelete.length <=
      3
    ) {
      setUploadedImages(files);
      setFileError(""); // Reset file error
      checkFileTypes(files); // Check file types
    } else {
      alert("Tổng số hình ảnh không được vượt quá 3.");
    }
  };

  const checkFileTypes = (files) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    for (let file of files) {
      if (!allowedTypes.includes(file.type)) {
        setFileError(`Tệp '${file.name}' không phải là hình ảnh.`);
        return;
      }
    }
    setFileError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (dataProduct.name === "") {
      errorSubmit.name = "Vui Lòng Nhập Tên";
      flag = false;
    }
    if (dataProduct.brand === "") {
      errorSubmit.brand = "Vui Lòng Nhập Brand";
      flag = false;
    }
    if (dataProduct.category === "") {
      errorSubmit.category = "Vui Lòng Nhập Category";
      flag = false;
    }
    if (dataProduct.company === "") {
      errorSubmit.company = "Vui Lòng Nhập Company";
      flag = false;
    }
    if (dataProduct.price === "") {
      errorSubmit.price = "Vui Lòng Nhập Giá";
      flag = false;
    }
    if (dataProduct.status === 0 && dataProduct.sale === "") {
      errorSubmit.sale = "Vui Lòng Nhập Sale";
      flag = false;
    }
    if (dataProduct.status === "") {
      errorSubmit.status = "Vui Lòng Nhập Trạng Thái";
      flag = false;
    }
    if (dataProduct.detail === "") {
      errorSubmit.detail = "Vui Lòng Nhập Mô Tả";
      flag = false;
    }
    // if (
    //   uploadedImages.length === 0 &&
    //   dataProduct.images.length - selectedImagesToDelete.length === 0
    // ) {
    //   errorSubmit.images = "Vui lòng chọn ít nhất một hình ảnh.";
    //   flag = false;
    // }
    // if (fileError !== "") {
    //   flag = false;
    // }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
      const formData = new FormData();
      formData.append("name", dataProduct.name);
      formData.append("price", dataProduct.price);
      formData.append("category", dataProduct.category);
      formData.append("brand", dataProduct.brand);
      formData.append("sale", dataProduct.sale);
      formData.append("company", dataProduct.company);
      formData.append("detail", dataProduct.detail);
      formData.append("status", dataProduct.status);
      selectedImagesToDelete.forEach((image) => {
        formData.append("avatarCheckBox[]", image);
      });
      uploadedImages.forEach((file) => {
        formData.append("images[]", file);
      });

      const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      };

      try {
        const response = await axios.post(
          "http://localhost/laravel8/public/api/user/product/update/" +
            params.id,
          formData,
          { headers }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">My Product</h2>
          <div className="signup-form">
            <h2>Update Product</h2>

            <form onSubmit={handleSubmit}>
              <input
                value={dataProduct.name || ""}
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                value={dataProduct.price || ""}
                name="price"
                type="number"
                placeholder="Price"
                onChange={handleChange}
              />
              <select
                value={dataProduct.category}
                name="category"
                onChange={handleChange}
              >
                <option value="">Hãy chọn category</option>
                {dataCategory.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.category}
                  </option>
                ))}
              </select>

              <select
                value={dataProduct.brand}
                name="brand"
                onChange={handleChange}
              >
                <option value="">Hãy chọn brand</option>
                {dataBrand.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.brand}
                  </option>
                ))}
              </select>

              <select
                value={dataProduct.status || ""}
                name="status"
                onChange={handleChange}
              >
                <option value="1">new</option>
                <option value="0">sale</option>
              </select>
              <input
                value={dataProduct.sale || ""}
                name="sale"
                type={dataProduct.status === "0" ? "number" : "hidden"}
                placeholder="Sale"
                onChange={handleChange}
              />
              <input
                value={dataProduct.company || ""}
                name="company"
                type="text"
                placeholder="Company"
                onChange={handleChange}
              />
              <textarea
                value={dataProduct.detail || ""}
                name="detail"
                placeholder="Detail"
                onChange={handleChange}
              />

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {dataProduct.image &&
                  dataProduct.image.map((image, index) => (
                    <div key={index} style={{ margin: "5px" }}>
                      <img src={image.url} alt={image.name} width="100" />
                      <br />
                      <input
                        type="checkbox"
                        value={image.name}
                        onChange={handleCheckboxChange}
                      />{" "}
                      Xóa
                    </div>
                  ))}
              </div>

              <input
                multiple
                type="file"
                placeholder="avatar"
                onChange={handleUserInputFile}
              />
              {fileError && <p style={{ color: "red" }}>{fileError}</p>}
              {errors.images && <p style={{ color: "red" }}>{errors.images}</p>}
              <button type="submit" className="btn btn-default">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
