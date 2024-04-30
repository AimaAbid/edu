import React from "react";
import DashHeader from "../DashHeader";
import Dashboard from "../Dashboard";
import "./Createpost.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
	var [post, setPost] = useState({
		'title': '',
		'subject': '',
		'description': '',
		'file':'',
		'userId': 1,
		'username': 'Aima',
	});
	var [image, setImage] = useState("");
	var temp;
	var navigate = useNavigate();
	return (
		<div>
			<DashHeader />
			<Dashboard />

			<div className="position-adjustment">
				<div class="auth">
					<div className="form">
						<div className="form-group">
							<input
								type="text"
								class="form-control input-title"
								placeholder="Title"
								name="title"
								onChange={handleChange}
							/>
						</div>

						<div className="form-group">
							<select onChange={handleChange} name="subject">
								<option>Computer network</option>
								<option>Automata</option>
								<option>Compiler</option>
								<option>DBMS</option>
								<option>Data Structure</option>
								<option>Microprocessor</option>
							</select>
						</div>

						<div className="form-group">
							<input
								type="text"
								class="form-control input-body"
								onChange={handleChange}
								name="description"
								placeholder="Body"
							/>
						</div>
						<input type="file" onChange={handleMedia} />

						
						<button className="btn btn-success" onClick={handleSubmit}>
							Submit
						</button>
					</div>
					
					{/* <img src={img} alt="" /> */}
				</div>
			</div>
		</div>
	);

	async function handleMedia(e) {
		var formData = new FormData();
		formData.append("file", e.target.files[0]);
		var response = await fetch("http://localhost:8000/upload", {
			method: "post",
			body: formData,
		});
		response = await response.json();
		setPost({ ...post, 'file': response.imgPath });
		
			console.log("image added");
			console.log(response.imgPath);
			 setImage(response.imgPath);
			
		
	}

	function handleChange(e) {
		setPost({ ...post, [e.target.name]: e.target.value,});
		
	}

	async function handleSubmit(e) {
		e.preventDefault();
	
		

		var response = await fetch("http://localhost:8000/addpost", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(post),
		});
		
		
			alert("Post Added Successfully");
		
	
		navigate("/uploaded-posts");
	}
}
