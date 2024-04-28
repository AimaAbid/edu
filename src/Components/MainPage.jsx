import React from "react";
import SearchBar from "./SearchBar";
import Post from "./Post";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MainPageHeader from "./MainPageHeader";
import { useEffect,useState } from "react";
import { title } from "process";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
	var [posts,setPosts]=useState([]);
	var navigate=useNavigate();
	



	useEffect(() => {
		getPosts();
	},[]);
	return (
		<div>
			{/* <div className="header">
				<div className="left">
					<i class="fa fa-rss" aria-hidden="true">
						&nbsp;
					</i>
					EduCollabHub
				</div>
				<div id="right">
					<ul>
						<li>
							<Link to="/course-list">Courses!</Link>
						</li>
						<li>
							<Link to="/x">Sponsorship!</Link>
              {/* on clicking on sponsorship a dropdown list opens then we can chose to become a sponsor or apply for sopnsorship  */}
						{/* </li>
						<li>
							<Link to="/x">Alumni!</Link>
						</li>
						<li >
							<Link to="/user" ><i class="fa fa-user-circle" aria-hidden="true" ></i></Link>
						</li>
					</ul>
				</div>
			</div> */} 
			<MainPageHeader/>
			<div className="main-page container ">
				<SearchBar />
				 {
					posts.map((post)=>(
						<div className='container post' >
     
      
						<p id='title'>{post.title} </p>
				  
						<br />
						<p id='username'>{post.username}</p>
						<img src={post.pic} alt="img" />
						<br /><br />
						<button className='btn btn-primary ' id='button' onClick={()=>{handleRead(post.id)}}>Read More</button>
					  </div>
					))
				} 
				
			</div>
			<Footer />
		</div>
	
	);

	async function getPosts(){
		var response=await fetch("http://localhost:8000/allposts");
		response= await response.json();
		//response is an array of objects
		setPosts(response);
		console.log(response);
	}
	function handleRead(id){
		navigate(`/general-post/${id}`)

	}
}
