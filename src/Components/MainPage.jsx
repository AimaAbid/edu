import React from "react";
import SearchBar from "./SearchBar";
import Post from "./Post";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MainPageHeader from "./MainPageHeader";
import { useEffect,useState } from "react";
import { title } from "process";

export default function MainPage() {
	var [posts, setPosts]=useState({
		title:"",
		description:"",
		pic:""
	});
	



	useEffect(() => {
		getPosts();
	})
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
						<div>
							<p>{post.title}</p>
							<p>{post.description}</p>
							<img src={post.pic} alt="" />
						</div>
					))
				}
				
			</div>
			<Footer />
		</div>
	
	);

	async function getPosts(){
		var res=await fetch("http://localhost:8000/allposts");
		res=await res.json();
		console.log(res);
		// setDescription(res.description);
		// setTitle(res.title);
		// setImg(res.pic);
		let obj={
			title:res.title,
			description:res.description,
			pic:res.pic
		}
          setPosts({...posts, obj})
	}
}
