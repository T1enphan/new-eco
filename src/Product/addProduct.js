import axios from "axios";
import { useEffect, useState } from "react";
function AddProduct() {
    return (
        <>
            <div className="col-sm-9">
                <div className="blog-post-area">
                    <h2 className="title text-center">My Product</h2>
                    <div className="signup-form">
                        <h2>Create Product</h2>
                        <form>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                name="price"
                                type="number"
                                placeholder="Price"
                            />
                            <input
                                name="category"
                                type="text"
                                placeholder="Please choose category"
                            />
                            <input
                                name="brand"
                                type="text"
                                placeholder="Please choose brand"
                            />
                            <input
                                name="Status"
                                type="text"
                                placeholder="Status"
                            />
                            <input
                                name="Sale"
                                type="text"
                                placeholder="Sale"
                            />
                            <input
                                name="Company"
                                type="text"
                                placeholder="Company"
                            />
                            <textarea
                                name="Detail"
                                placeholder="Detail"
                            />
                            <input type="file" placeholder="avatar" />
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
export default AddProduct;