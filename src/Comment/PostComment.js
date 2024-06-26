import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function PostComment(props) {
  let params = useParams();
  const [isLogin, setIsLogin] = useState(false);
  const [errors, setErrors] = useState("");
  const [input, setInput] = useState({
    comment: "",
  });
  const [checkLogin, setCheckLogin] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLogin = localStorage.getItem("checkLogin");
    if (storedLogin) {
      const parsedLogin = JSON.parse(storedLogin);
      // console.log(parsedLogin);
      setIsLogin(true);
      setCheckLogin(parsedLogin);
      setAccessToken(parsedLogin.token); // Lấy token từ dữ liệu trong localStorage
    }
  }, []);

  const handelPostComment = () => {
    if (isLogin) {
      console.log("Đã login");
    } else {
      console.log("Chưa login");
      navigate("/login");
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (input.comment === "") {
      errorSubmit.comment = "hãy nhập comment";
      console.log("hãy nhập comment");
      flag = false;
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
      let url =
        "http://localhost/laravel8/public/api/blog/comment/" + params.id;
      let config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };

      if (checkLogin && checkLogin.Auth) {
        const formData = new FormData();
        formData.append("id_blog", props.idBlog);
        formData.append("id_user", checkLogin.Auth.id);
        formData.append("name_user", checkLogin.Auth.name);
        formData.append("id_comment", props.IDcha ? props.IDcha : 0);
        formData.append("comment", input.comment);
        formData.append("image_user", checkLogin.Auth.avatar);

        axios
          .post(url, formData, config)
          .then((res) => {
            const dataCmt = res.data.data;
            console.log("handleSubmit", dataCmt);
            console.log("props.onComment", props.onComment);
            props.onComment(dataCmt);
            setInput({ comment: "" });
          })
          .catch((error) => {
            console.error("Hãy nhập comment !", error);
          });
      } else {
        console.error("Chưa đăng. Nhập hãy đăng nhập!");
        navigate("/login");
      }
    }
  };
  // console.log("idCha", props.IDcha);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="replay-box">
          <div className="row">
            <div className="col-sm-12">
              <h2>Leave a replay</h2>

              <div className="text-area">
                <div className="blank-arrow">
                  <label>Your Name</label>
                </div>
                <span>*</span>
                <textarea
                  value={input.comment}
                  onChange={handleChange}
                  name="comment"
                  rows="11"
                ></textarea>
                <button
                  //Chú ý cái button type
                  type="submit"
                  // onClick={handelPostComment}
                  className="btn btn-primary"
                  href=""
                >
                  post comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PostComment;
