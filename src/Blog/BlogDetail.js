import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rate from "../Comment/Rate";
import ListComment from "../Comment/ListComment";
import PostComment from "../Comment/PostComment";
// import 'bootstrap/dist/css/bootstrap.min.css';
function BlogDetail(props) {
  let params = useParams();
  const [data, setData] = useState([]);
  const [listCmt, setListCmt] = useState([]);
  const [IDcha, setIDcha] = useState(null);
  useEffect(() => {
    const getDataCommet = async () => {
      try {
        const response = await axios.get(
          "http://localhost/laravel8/public/api/blog/detail/" + params.id
        );
        setListCmt(response.data.data.comment);
        setData(response.data.data);
      } catch (error) {
        console.log("co loi  : ".error);
      }
    };
    getDataCommet();
    // axios
    //   .get("http://localhost/laravel8/public/api/blog/detail/" + params.id)
    //   .then((res) => {
    //     setData(res.data.data);
    //     // console.log(res.data.data);
    //     setComment(res.data.data.comment);
    //     console.log(res.data.data.comment);
    //   });
  }, []);

  const handleSetIDcha = (id) => {
    setIDcha(id);
    console.log("idCha từ blogDetail:", id);
  };

  const handlePostComment = (dataCmt) => {
    setListCmt([...listCmt, dataCmt]);
  };

  const fontSizeBlog = {
    fontSize: "20px",
  };
  function renderData() {
    if (data) {
      return (
        <div className="single-blog-post">
          <h3>{data.title}</h3>
          <div className="post-meta">
            <ul>
              <li>
                <i className="fa fa-user"></i> Mac Doe
              </li>
              <li>
                <i className="fa fa-clock-o"></i> 1:33 pm
              </li>
              <li>
                <i className="fa fa-calendar"></i> DEC 5, 2013
              </li>
            </ul>
            <span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </span>
          </div>
          <a href="">
            <img
              src={`http://localhost/laravel8/public/upload/Blog/image/${data.image}`}
              alt=""
            />
          </a>
          <p style={fontSizeBlog}>{data.description}</p>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }

  return (
    <>
      <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>
          {renderData()}
        </div>
        {/* start rate */}
        <Rate idBlog={params.id}></Rate>
        {/* end rate */}
        <div className="socials-share">
          <a href="">
            <img src="/images/blog/socials.png" alt="" />
          </a>
        </div>
        {/* start comment */}
        <ListComment
          comment={listCmt}
          onSetIDcha={handleSetIDcha}
        ></ListComment>
        {/* end comment */}

        {/* start replay */}
        <PostComment
          idBlog={params.id}
          onComment={handlePostComment}
          IDcha={IDcha}
        ></PostComment>
        {/* end replay */}
      </div>
    </>
  );
}
export default BlogDetail;
