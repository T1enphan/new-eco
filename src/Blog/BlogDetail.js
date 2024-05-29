import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rate from "../Comment/Rate";
import Comment from "../Comment/Comment"
import Replay from "../Comment/Replay"
function BlogDetail(props) {
  let params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/laravel8/public/api/blog/detail/" + params.id)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      });
  }, []);
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
          <p>{data.description}</p>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
  return (
    <>
      <div class="col-sm-9">
        <div class="blog-post-area">
          <h2 class="title text-center">Latest From our Blog</h2>
          {renderData()}
        </div>
        {/* start rate */}
        <Rate></Rate>
        {/* end rate */}
        <div class="socials-share">
          <a href="">
            <img src="/images/blog/socials.png" alt="" />
          </a>
        </div>


        {/* <div class="media commnets">
          <a class="pull-left" href="#">
            <img class="media-object" src="/images/blog/man-one.jpg" alt="" />
          </a>
          <div class="media-body">
            <h4 class="media-heading">Annie Davis</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div class="blog-socials">
              <ul>
                <li>
                  <a href="">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
              <a class="btn btn-primary" href="">
                Other Posts
              </a>
            </div>
          </div>
        </div> */}
        {/* start comment */}
        <Comment></Comment>
        {/* end comment */}

        {/* start replay */}
        <Replay></Replay>
        {/* end replay */}
      </div>
    </>
  );
}
export default BlogDetail;
