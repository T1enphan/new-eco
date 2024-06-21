import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function HomeProduct(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/laravel8/public/api/product/wishlist")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  function renderData() {
    if (data.length > 0) {
      return data.map((value, key) => {
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
                    <a
                      href="#"
                      id="product1"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li>
                    <a href="">
                      <i className="fa fa-plus-square"></i>Add to wishlist
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
  }
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
