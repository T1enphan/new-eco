import axios from "axios";
import { useEffect, useState } from "react";
function EditProduct() {
    const [accessToken, setAccessToken] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [errors, setErrors] = useState({});
    const [checkLogin, setCheckLogin] = useState(null);
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
                console.log("co loi: ", error);
            }
        };
        GetData();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((state) => ({ ...state, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!checkLoginUser()) return;
        let errorSubmit = {};
        let flag = true;

        if (inputs.name === "") {
            errorSubmit.name = "Vui Lòng Nhập Tên";
            flag = false;
        }
        if (inputs.brand === "") {
            errorSubmit.brand = "Vui Lòng Nhập Brand";
            flag = false;
        }
        if (inputs.category === "") {
            errorSubmit.category = "Vui Lòng Nhập Category";
            flag = false;
        }
        if (inputs.company === "") {
            errorSubmit.company = "Vui Lòng Nhập Company";
            flag = false;
        }
        if (inputs.price === "") {
            errorSubmit.price = "Vui Lòng Nhập Giá";
            flag = false;
        }
        if (inputs.status === 0 && inputs.sale === "") {
            errorSubmit.sale = "Vui Lòng Nhập Sale";
            flag = false;
        }
        if (inputs.status === "") {
            errorSubmit.status = "Vui Lòng Nhập Trạng Thái";
            flag = false;
        }
        if (inputs.detail === "") {
            errorSubmit.detail = "Vui Lòng Nhập Mô Tả";
            flag = false;
        }

        // if (!files || files.length === 0) {
        //   errorSubmit.avatar = "Hãy thêm ảnh vào";
        //   flag = false;
        // }

        if (!flag) {
            setErrors(errorSubmit);
        } else {
            setErrors({});
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
                formData.append("brand", inputs.brand);
                formData.append("category", inputs.category);
                formData.append("price", inputs.price);
                formData.append("status", inputs.status);
                formData.append("sale", inputs.sale);
                formData.append("detail", inputs.detail);
                formData.append("company", inputs.company);

                // files.forEach((file, index) => {
                //   formData.append(`file[${index}]`, file);
                // });

                const response = await axios.post(url, formData, config);
                console.log(response);
            } catch (error) {
                console.error(
                    "Error add product:",
                    error.response ? error.response.data : error.message
                );
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
                                type={inputs.status === "0" ? "number" : "hidden"}
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
                            // onChange={handleUserInputFile}
                            />
                            <button type="submit" className="btn btn-default">
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProduct;