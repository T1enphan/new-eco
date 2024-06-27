import axios from "axios";
import { useEffect, useState } from "react";

export default function ShowCart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataCartLocal = localStorage.getItem("cart");
    if (dataCartLocal) {
      const dataCart = JSON.parse(dataCartLocal);
      axios
        .post("http://localhost/laravel8/public/api/product/cart", dataCart)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  // console.log(data);
  const handleDelete = (key, value) => {
    console.log(key);
    // const newData = data.filter((_, index) => index !== key);
    // setData(newData);
    // localStorage.setItem("cart", JSON.stringify(newData));
  };

  function renderData() {
    if (data && data.length > 0) {
      return data.map((value, key) => {
        return (
          <tr key={key}>
            <td className="cart_product">
              <a href="">
                <img src="images/cart/two.png" alt="" />
              </a>
            </td>
            <td className="cart_description">
              <h4>
                <a href="">{value.name}</a>
              </h4>
              <p>Web ID: 1089772</p>
            </td>
            <td className="cart_price">
              <p>${value.price}</p>
            </td>
            <td className="cart_quantity">
              <div className="cart_quantity_button">
                <a className="cart_quantity_up" href="">
                  {" "}
                  +{" "}
                </a>
                <input
                  className="cart_quantity_input"
                  type="text"
                  name="quantity"
                  value="1"
                  autocomplete="off"
                  size="2"
                />
                <a className="cart_quantity_down" href="">
                  {" "}
                  -{" "}
                </a>
              </div>
            </td>
            <td className="cart_total">
              <p className="cart_total_price">$59</p>
            </td>
            <td className="cart_delete">
              <button
                className="cart_quantity_delete"
                onClick={() => handleDelete(key)}
                href=""
              >
                <i className="fa fa-times"></i>
              </button>
            </td>
          </tr>
        );
      });
    }
  }
  renderData();
  return (
    <div>
      <section id="cart_items">
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Shopping Cart</li>
            </ol>
          </div>
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Item</td>
                  <td className="description"></td>
                  <td className="price">Price</td>
                  <td className="quantity">Quantity</td>
                  <td className="total">Total</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {/* san pham */}
                {renderData()}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="do_action">
        <div className="container">
          <div className="heading">
            <h3>What would you like to do next?</h3>
            <p>
              Choose if you have a discount code or reward points you want to
              use or would like to estimate your delivery cost.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="chose_area">
                <ul className="user_option">
                  <li>
                    <input type="checkbox" />
                    <label>Use Coupon Code</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Use Gift Voucher</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Estimate Shipping & Taxes</label>
                  </li>
                </ul>
                <ul className="user_info">
                  <li className="single_field">
                    <label>Country:</label>
                    <select>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Ucrane</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field">
                    <label>Region / State:</label>
                    <select>
                      <option>Select</option>
                      <option>Dhaka</option>
                      <option>London</option>
                      <option>Dillih</option>
                      <option>Lahore</option>
                      <option>Alaska</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field zip-field">
                    <label>Zip Code:</label>
                    <input type="text" />
                  </li>
                </ul>
                <a className="btn btn-default update" href="">
                  Get Quotes
                </a>
                <a className="btn btn-default check_out" href="">
                  Continue
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="total_area">
                <ul>
                  <li>
                    Cart Sub Total <span>$59</span>
                  </li>
                  <li>
                    Eco Tax <span>$2</span>
                  </li>
                  <li>
                    Shipping Cost <span>Free</span>
                  </li>
                  <li>
                    Total <span id="total_price">$61</span>
                  </li>
                </ul>
                <a className="btn btn-default update" href="">
                  Update
                </a>
                <a className="btn btn-default check_out" href="">
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
