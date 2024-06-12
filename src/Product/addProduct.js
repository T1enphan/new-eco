import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    const [isLogin, setIsLogin] = useState(false)
    const [accessToken, setAccessToken] = useState(null);
    const [error, setErorrs] = useState({})
    const navigate = useNavigate()
    const [dataBrand, setDataBrand] = useState([])
    const [dataCategory, setDataCategory] = useState([])
    const [inputs, setInputs] = useState({
        name: "",
        price: "",
        category: "",
        brand: "",
        sale: "",
        company: "",
        detail: "",
        status: "",
    });
    useEffect(() => {
        let dataUser = localStorage.getItem("checkLogin")
        if (dataUser) {
            dataUser = JSON.parse(dataUser);
            setIsLogin(true);
            setAccessToken(dataUser.token)
        }
        const GetData = async () => {
            try {
                const response = await axios.get("http://localhost/laravel8/public/api/category-brand");
                setDataBrand(response.data.brand)
                setDataCategory(response.data.category)
            } catch (error) {
                console.log("co loi  : ".error);
            }
        }
        GetData()
    }, [])
    function checkLoginUser() {
        if (isLogin) {
            console.log("Đã login");
            return true;
        } else {
            navigate("/login")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((state) => ({ ...state, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!checkLoginUser()) return;
        let errorSubmit = {};
        let flag = true;

        if(inputs.name === ""){
            errorSubmit.name = "Vui Long Nhap Ten";
            flag = false;
        }
        if(inputs.brand === ""){
            errorSubmit.brand = "Vui Long Nhap brand";
            flag = false;
        }
        if(inputs.category === ""){
            errorSubmit.category = "Vui Long Nhap category";
            flag = false;
        }
        if(inputs.company === ""){
            errorSubmit.company = "Vui Long Nhap company";
            flag = false;
        }
        if(inputs.price === ""){
            errorSubmit.price = "Vui Long Nhap gia";
            flag = false;
        }
        if(inputs.sale === ""){
            errorSubmit.sale = "Vui Long Nhap sale";
            flag = false;
        }
        if(inputs.status === ""){
            errorSubmit.status = "Vui Long Nhap trng thai";
            flag = false;
        }
        if(inputs.detail === ""){
            errorSubmit.detail = "Vui Long Nhap mota";
            flag = false;
        }
        if(!flag){
            setErorrs(errorSubmit)
        } else {
            setErorrs({})
            let url = "https://localhost/laravel8/public/api/user/product/add"
            let config = {
                headers: {
                    Authorization: `Bearer` + accessToken,
                    "Content-type": "multipart/form-data",
                    Accept: "application/json",
                }
            }
            const formData = new formData();
            ///
        }
    }

    return (
        <>
            <div className="col-sm-9">
                <div className="blog-post-area">
                    <h2 className="title text-center">My Product</h2>
                    <div className="signup-form">
                        <h2>Create Product</h2>
                        <form>
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
                            <input
                            //select
                                value={inputs.category}
                                name="category"
                                type="text"
                                placeholder="Please choose category"
                                onChange={handleChange}
                            />
                            <input
                            //select
                                value={inputs.brand}
                                name="brand"
                                type="text"
                                placeholder="Please choose brand"
                                onChange={handleChange}
                            />
                            <input
                            //select
                                value={inputs.status}
                                name="status"
                                type="text"
                                placeholder="Status"
                                onChange={handleChange}
                            />
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
                            {/* <input type="file" placeholder="avatar" /> */}
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
