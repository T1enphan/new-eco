import { useEffect, useState } from "react";
import axios from "axios";

function Blog(props) {
	const [data, setData] = useState([]);
	useEffect(()=>{
		axios.get("https://localhost/laravel8/public/api/blog")
		.then(res =>{
			setData(res.data.blog.data)
			console.log(res.data.blog.data);
		})
		.catch(error => console.error(error))
	}, []);
	function renderData(){
		if(data.length > 0){
			return data.map((value, key)=>{
				return (
					<div className="single-blog-post">
						<h3>{value.title}</h3>
						<div className="post-meta">
							<ul>
								<li><i className="fa fa-user"></i> Mac Doe</li>
								<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
								<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
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
							<img src={`http://localhost/laravel8/public/upload/Blog/image/${value.image}`} alt="" />
						</a>
						<p>{value.description}</p>
						<a className="btn btn-primary" href="">Read More</a>
					</div>
				)
			})
		} else {
			return(
				<p>123123</p>
			)
		}
	}

	return (
		<>
			<div class="col-sm-9">
				<div class="blog-post-area">
					<h2 class="title text-center">Latest From our Blog</h2>
{/* 					
					<div class="single-blog-post">
						<h3>Girls Pink T Shirt arrived in store</h3>
						<div class="post-meta">
							<ul>
								<li><i class="fa fa-user"></i> Mac Doe</li>
								<li><i class="fa fa-clock-o"></i> 1:33 pm</li>
								<li><i class="fa fa-calendar"></i> DEC 5, 2013</li>
							</ul>
							<span>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star-half-o"></i>
							</span>
						</div>
						<a href="">
							<img src="/images/blog/blog-one.jpg" alt="" />
						</a>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						<a class="btn btn-primary" href="">Read More</a>
					</div> */}
					{renderData()}


					<div class="pagination-area">
						<ul class="pagination">
							<li><a href="" class="active">1</a></li>
							<li><a href="">2</a></li>
							<li><a href="">3</a></li>
							<li><a href=""><i class="fa fa-angle-double-right"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
export default Blog;