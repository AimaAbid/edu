import React from "react";
import "./UserPageLinks/PostPage.css"; // Import CSS file for styling
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Header from "../Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./PostNoEdit.css";
import Hacker from"../Assets/unnamed.jpg"


export default function PostNoEdit() {
	var [post, setPost] = useState([]);
	var [comments, setComments] = useState([]);
	var [newComment, setNewComment] = useState("");

	useEffect(() => {
		getData();
		getComments();
	}, []);
	var { id } = useParams();
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
						<Link to="/main-page">Go Back</Link>
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
					<p className="post-content">{post.description}</p>
					<br />
					<p className="post-content">{post.description}</p>
                     <br /><br />
					<div className="comments-section">
						<h4>Comments:</h4>
						{comments.map((comment) => (
							<div key={comment.id} className="comment">
								
								
								<p className="comment-name"><img src={Hacker} className="comment-picture" alt="profile" />  {comment.username}</p>
								<p>{comment.text}</p>
								
								
							</div>
						))}
						<div className="add-comment">
							<textarea
								rows="4"
								cols="50"
								value={newComment}
								onChange={(e) => setNewComment(e.target.value)}
								placeholder="Add a new comment..."
							></textarea>
							<button onClick={handleAddComment}>Add Comment</button>
						</div>
						
					</div>
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

	function handleAddComment() {}

	async function getComments() {
		var response = await fetch("http://localhost:8000/comments/3");
		response = await response.json();
		setComments(response);
	}
}
