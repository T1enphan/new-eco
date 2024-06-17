import axios from "axios";
import { useEffect, useState } from "react";

function GetMyProduct() {
  const [data, setData] = useState({});
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let dataUser = localStorage.getItem("checkLogin");
      if (dataUser) {
        dataUser = JSON.parse(dataUser);
        setAccessToken(dataUser.token);

        const headers = {
          Authorization: `Bearer ${dataUser.token}`,
        };

        try {
          const res = await axios.get(
            "http://localhost/laravel8/public/api/user/my-product",
            { headers }
          );
          setData(res.data.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, []);

  // const handleDelete = async (id) => {
  //   if (accessToken) {
  //     const headers = {
  //       Authorization: `Bearer ${accessToken}`,
  //     };

  //     try {
  //       const res = await axios.post(
  //         `http://localhost/laravel8/public/api/user/product/delete/${id}`,
  //         { headers }
  //       );
  //       if (res.status === 200) {
  //         // Xóa sản phẩm thành công, cập nhật lại dữ liệu
  //         setData((prevData) => {
  //           const updatedData = { ...prevData };
  //           delete updatedData[id];
  //           return updatedData;
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const handleDelete = async (id) => {
    if (accessToken) {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      try {
        const res = await axios.post(
          `http://localhost/laravel8/public/api/user/product/delete/${id}`,
          {},
          { headers }
        );
        if (res.status === 200) {
          // Xóa sản phẩm thành công, cập nhật lại dữ liệu
          setData((prevData) => {
            const updatedData = { ...prevData };
            delete updatedData[id];
            return updatedData;
          });
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized: Invalid token");
        } else {
          console.log(error);
        }
      }
    } else {
      console.log("No access token found");
    }
  };

  function renderData() {
    console.log(data);
    if (data) {
      return Object.keys(data).map((key, index) => {
        const item = data[key];
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>
              <img src={item.image} width="50" height="50" alt={item.name} />
            </td>
            <td>{item.price}</td>
            <td className="text-center">
              <button className="btn btn-warning">Edit</button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    } else {
      console.log(2);
    }
  }

  return (
    <>
      <div className="col-sm-9">
        <table className="table table-bordered cart_info">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
    </>
  );
}

export default GetMyProduct;
