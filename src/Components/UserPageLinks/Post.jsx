import React from "react";
import "./PostPage.css"; // Import CSS file for styling
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Hacker from "./unnamed.jpg"

const Post = () => {
	var [post, setPost] = useState([]);
	var navigate = useNavigate();
	var { id } = useParams();

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<div>
				<div className="dash-header ">
					<div className="both" id="left">
						<i class="fa fa-rss" aria-hidden="true">
							&nbsp;
						</i>
						EduCollabHub
					</div>

					<div className="both" id="dash-right">
						<Link to="/uploaded-posts">Go Back</Link>
					</div>
				</div>
			</div>

			{/* //////////////////////////////////////////////////////////////// */}
			<div className="post-page vertical-adjustment">
				<div className="post-container">
					<h1 className="post-title">{post.title}</h1>
					<p className="post-author" style={{textAlign:"center"}}><img src={Hacker} className="comment-picture" alt="profile" />  Posted by {post.username}</p>
					
					<img className="post-image" src={post.file} alt="Post" />
					<p className="post-content">{post.description}</p>
					
					<br />
					<button className="btn btn-lg btn-primary" onClick={handleEdit}>
						{" "}
						Edit Post!{" "}
					</button>
					<button
						className="btn btn-lg btn-danger "
						id="delete-button-left"
						onClick={deletePost}
					>
						{" "}
						Delete Post!{" "}
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);

	async function getData() {
		var response = await fetch("http://localhost:8000/viewpost/" + id);
		response = await response.json();
		console.log(response);
		setPost(response[0]);
	}
	async function handleEdit() {
		navigate(`/edit/${id}`);
	}
	async function deletePost() {
		await fetch("http://localhost:8000/deletepost/" + id);
		alert("User Deleted Successfully");
		navigate("/uploaded-posts");
	}
};

export default Post;
