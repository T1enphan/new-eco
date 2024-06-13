import axios from "axios";
import { useEffect, useState } from "react";
function GetMyProduct() {
    return (
        <>
            <div className="col-sm-9">
                <div className="table-responsive cart_info">
                    <table className="table table-condensed">
                        <thead>
                            <tr className="cart_menu">
                                <td className="image">image</td>
                                <td className="description">name</td>
                                <td className="price">price</td>

                                <td className="total">action</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="cart_product">
                                    <a href=""><img src="images/cart/one.png" alt="" /></a>
                                </td>
                                <td className="cart_description">
                                    <h4><a href="">Colorblock Scuba</a></h4>

                                </td>
                                <td className="cart_price">
                                    <p>$59</p>
                                </td>

                                <td className="cart_total">
                                    <a>edit</a>
                                    <a>delete</a>
                                </td>

                            </tr>
                            <tr>
                                <td className="cart_product">
                                    <a href=""><img src="images/cart/one.png" alt="" /></a>
                                </td>
                                <td className="cart_description">
                                    <h4><a href="">Colorblock Scuba</a></h4>

                                </td>
                                <td className="cart_price">
                                    <p>$59</p>
                                </td>

                                <td className="cart_total">
                                    <a>edit</a>
                                    <a>delete</a>
                                </td>

                            </tr>
                            <tr>
                                <td className="cart_product">
                                    <a href=""><img src="images/cart/one.png" alt="" /></a>
                                </td>
                                <td className="cart_description">
                                    <h4><a href="">Colorblock Scuba</a></h4>

                                </td>
                                <td className="cart_price">
                                    <p>$59</p>
                                </td>

                                <td className="cart_total">
                                    <a>edit</a>
                                    <a>delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default GetMyProduct;