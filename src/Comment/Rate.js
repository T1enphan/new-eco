import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings"
// import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useParams } from "react-router-dom";
function Rate() {
  const [isLogin, setIsLogin] = useState(false);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  let params = useParams()
  useEffect(() => {
    const storedLogin = localStorage.getItem("checkLogin");
    if (storedLogin) {
      const parsedLogin = JSON.parse(storedLogin);
      console.log(parsedLogin);
      setIsLogin(true)
    }
  }, [])

  const checkLoginRate = (e) => {
    if (isLogin) {
      console.log("oke đã login");
    } else {
      console.log("Chưa login kìa ông nội");
      navigate("/login")
      return false
    }
  }

  function changeRating(newRating, name) {
    if(checkLoginRate){
      setRating(newRating)
      axios.post("https://localhost/laravel8/public/api/blog/rate/"+ params.id )
    }
  }

  return (
    <>
      <div class="rating-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
              />

            </div>
            <div className="col">
              <ul class="tag">
                <li>TAG:</li>
                <li>
                  <a class="color" href="">
                    Pink <span>/</span>
                  </a>
                </li>
                <li>
                  <a class="color" href="">
                    T-Shirt <span>/</span>
                  </a>
                </li>
                <li>
                  <a class="color" href="">
                    Girls
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Rate;