import axios from "axios";
import { useEffect, useState } from "react";
function HomeProduct() {
    const {data, setData} =useState([])
    useEffect(()=>{
        axios.get("http://localhost/laravel8/public/api/product/wishlist")
        .then((res)=>{
            console.log(res.data.data);
        })
    },[])
    return (
        <>
            <div className="col-sm-9 padding-right">
                <div className="features_items">
                    <h2 className="title text-center">Features Items</h2>
                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/shop/product12.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$561</h2>
                                        <p>Easy Polo Black Edition1</p>
                                        <a href="#" id="product1" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/shop/product11.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$562</h2>
                                        <p>Easy Polo Black Edition2</p>
                                        <a href="#" id="product2" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/shop/product10.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$563</h2>
                                        <p>Easy Polo Black Edition3</p>
                                        <a href="#" id="product3" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/shop/product9.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$564</h2>
                                        <p>Easy Polo Black Edition4</p>
                                        <a href="#" id="product4" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                                <img src="images/home/new.png" className="new" alt="" />
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/shop/product8.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$565</h2>
                                        <p>Easy Polo Black Edition5</p>
                                        <a href="#" id="product5" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                                <img src="images/home/sale.png" className="new" alt="" />
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/shop/product7.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$566</h2>
                                        <p>Easy Polo Black Edition6</p>
                                        <a href="#" id="product6" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/product6.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$567</h2>
                                        <p>Easy Polo Black Edition7</p>
                                        <a href="#" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/product5.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$568</h2>
                                        <p>Easy Polo Black Edition8</p>
                                        <a href="#" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/product4.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$569</h2>
                                        <p>Easy Polo Black Edition9</p>
                                        <a href="#" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/product3.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$5610</h2>
                                        <p>Easy Polo Black Edition10</p>
                                        <a href="#" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/product2.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$5611</h2>
                                        <p>Easy Polo Black Edition11</p>
                                        <a href="#" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/product1.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i
                                        className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>$5612</h2>
                                        <p>Easy Polo Black Edition12</p>
                                        <a href="#" className="btn btn-default add-to-cart"><i
                                            className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                    <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <ul className="pagination">
                        <li className="active"><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">&raquo;</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default HomeProduct;