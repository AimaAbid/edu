import React from "react";
import "./UserPageLinks/PostPage.css"; // Import CSS file for styling
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Header from "../Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function PostNoEdit (){
	var [post, setPost] = useState([]);

	useEffect(() => {
		getData();
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
                    <Link to="/login">Go Back</Link>
                    

                </div>
			
			</div>
		</div>

            {/* //////////////////////////////////////////////////////////////// */}
			<div className="post-page vertical-adjustment">
				<div className="post-container">
					<h1 className="post-title">{post.title}</h1>
					<p className="post-author">{post.username}</p>
					<img className="post-image" src={post.pic} alt="Post" />
					<p className="post-content">{post.description}</p>
                    <h3>Comments</h3>
                    
				</div>
			</div>
            <Footer/>
		</div>
	);

	async function getData() {
		var response = await fetch("http://localhost:8000/viewpost/" + id);
		response = await response.json();
		console.log(response);
		setPost(response[0]);
	}
};

