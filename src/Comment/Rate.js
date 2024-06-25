import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";

function Rate(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [rating, setRating] = useState(0);
  const [checkLogin, setCheckLogin] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  // const [numberOfVotes, setNumberOfVotes] = useState(0);
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    const storedLogin = localStorage.getItem("checkLogin");
    if (storedLogin) {
      const parsedLogin = JSON.parse(storedLogin);
      setIsLogin(true);
      setCheckLogin(parsedLogin);
      setAccessToken(parsedLogin.token);
    }
    // axios.get("http://localhost/laravel8/public/api/blog/rate/" + params.id)
    // .then((res)=>{
    //   const data = res.data;
    //   if (data.numberOfVotes) {
    //     setNumberOfVotes(data.numberOfVotes);
    //     console.log(data.numberOfVotes);
    //     }
    // })
    // .catch(error =>{
    //   console.error("Loi du lieu: ", error);
    // })
  }, []);

  const checkLoginRate = () => {
    if (isLogin) {
      console.log("oke đã login");
      return true;
    } else {
      console.log("Chưa login");
      navigate("/login");
      return false;
    }
  };

  const changeRating = (newRating, name) => {
    if (checkLoginRate()) {
      setRating(newRating);
      let url = "http://localhost/laravel8/public/api/blog/rate/" + params.id;
      let config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };

      if (checkLogin && checkLogin.Auth) {
        const formData = new FormData();
        formData.append("blog_id", props.idBlog);
        formData.append("user_id", checkLogin.Auth.id);
        formData.append("rate", newRating);

        axios
          .post(url, formData, config)
          .then((res) => {
            console.log(formData);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };

  return (
    <>
      <div className="rating-area">
        <ul className="ratings">
          <li className="rate-this">Rate this item:</li>
          <li>
            <StarRatings
              rating={rating}
              starRatedColor="blue"
              changeRating={changeRating}
              numberOfStars={5}
              name="rating"
            />
          </li>
          <li className="color">(12 votes)</li>
        </ul>
        <ul className="tag">
          <li>TAG:</li>
          <li>
            <a className="color" href="">
              Pink <span>/</span>
            </a>
          </li>
          <li>
            <a className="color" href="">
              T-Shirt <span>/</span>
            </a>
          </li>
          <li>
            <a className="color" href="">
              Girls
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Rate;
