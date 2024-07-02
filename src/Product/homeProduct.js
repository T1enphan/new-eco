import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import { CartContext } from "../Product/CartContext";
function HomeProduct(props) {
  const [data, setData] = useState([]);
  const [idProduct, setIdProduct] = useState([]);
  const [cart, setCart] = useState({});
  const { cartLength, setCartLength, wishlistCount, setWishlistCount } =
    useContext(CartContext);
  useEffect(() => {
    const getDataProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost/laravel8/public/api/product/wishlist"
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getCartLength = async () => {
      const dataCartLocal = localStorage.getItem("cart");
      if (dataCartLocal) {
        const dataCart = JSON.parse(dataCartLocal);
        setCart(dataCart);
        axios
          .post("http://localhost/laravel8/public/api/product/cart", dataCart)
          .then((res) => {
            setCartLength(
              Object.keys(dataCart).reduce((sum, key) => sum + dataCart[key], 0)
            ); // Cập nhật cartLength
          });
      }
    };
    getCartLength();
    getDataProduct();
  }, []);

  const addToWishList = (product) => {
    const productId = product.id;
    //điều kiện set id vào array
    if (!idProduct.includes(productId)) {
      //set id vào array
      setIdProduct([...idProduct, productId]);
      setWishlistCount(wishlistCount + 1);
      axios
        .get("http://localhost/laravel8/public/api/product/wishlist", idProduct)
        .then((res) => {
          console.log(res);
        });
    } else {
      //nếu đã có thì xóa khỏi mảng
      const updatedIdProduct = idProduct.filter(
        (idProduct) => idProduct !== productId
      );
      setIdProduct(updatedIdProduct);
      setWishlistCount(wishlistCount - 1);
      axios
        .get("http://localhost/laravel8/public/api/product/wishlist", {
          updatedIdProduct,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };
  console.log(idProduct.length);

  const addToCart = (product) => {
    const productId = product.id;
    const qty = 1;
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (!cart[productId]) {
      cart[productId] = qty;
    }
    setCartLength(Object.keys(cart).reduce((sum, key) => sum + cart[key], 0));
    console.log(cartLength);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Product added to cart:", cart);
    axios
      .post("http://localhost/laravel8/public/api/product/cart", cart)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const renderData = () => {
    if (data.length > 0) {
      return data.map((value, key) => {
        const isInWishlist = idProduct.includes(value.id);
        return (
          <div key={key} className="col-sm-4">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img src="images/shop/product12.jpg" alt="" />
                  <h2>{value.price}</h2>
                  <p>{value.name}</p>
                  <a href="#" className="btn btn-default add-to-cart">
                    <i className="fa fa-shopping-cart"></i>Add to cart
                  </a>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <h2>{value.price}</h2>
                    <p>{value.name}</p>
                    <button
                      href="#"
                      id="product1"
                      className="btn btn-default add-to-cart"
                      onClick={() => addToCart(value)}
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart1
                    </button>
                  </div>
                </div>
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li>
                    <a
                      onClick={() => addToWishList(value)}
                      style={{ color: isInWishlist ? "red" : "black" }}
                    >
                      <i className="fa fa-plus-square"></i>
                      {isInWishlist ? "Remove Wishlist" : "Add to Wishlist"}
                    </a>
                  </li>
                  <li>
                    <Link href="" to={`/product/detail-product/${value.id}`}>
                      <i className="fa fa-plus-square"></i>More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <>
      <div className="col-sm-9 padding-right">
        <div className="features_items">
          <h2 className="title text-center">Features Items</h2>
          {renderData()}
          {/* Phân trang */}
          <ul className="pagination">
            <li className="active">
              <a href="">1</a>
            </li>
            <li>
              <a href="">2</a>
            </li>
            <li>
              <a href="">3</a>
            </li>
            <li>
              <a href="">&raquo;</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default HomeProduct;
