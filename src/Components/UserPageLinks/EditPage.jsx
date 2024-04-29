import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import React from 'react'

import { useNavigate } from "react-router-dom";
import "./Createpost.css";
import { useState } from "react";

export default function EditPage() {
	var [title, setTitle] = useState("");
	var [description, setDescription] = useState("");
	
	
	var { id } = useParams();
	var navigate=useNavigate();

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
						<Link to={`/post/${id}`}>Go Back</Link>
					</div>
				</div>
			</div>

			<div className="vertical-adjustment">
				<div class="auth">
					<div className="form">
						<div className="form-group">
							<input
								type="text"
								class="form-control input-title"
								value={title}
								placeholder="Title"
								name="title"
								onChange={handleTitle}
							/>
						</div>
						<div className="form-group">
							<select >
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
								value={description}
								placeholder="Body"
								onChange={handleDescription}
								name="description"
							/>
						</div>

						<div className="form-group">
							<button>
								<i class="fa fa-link" aria-hidden="true"></i>
							</button>
							<button>
								<i class="fa-solid fa-image"></i>
							</button>
							<button>
								<i class="fa-solid fa-video"></i>
							</button>
							<button>
								<i class="fa-solid fa-audio-description"></i>
							</button>
						</div>
						<button className="btn btn-success" onClick={handleEdit}>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);

	

	async function getData() {
		var res = await fetch("http://localhost:8000/viewpost/" + id);
		res = await res.json();
		setTitle(res[0].title);
		setDescription(res[0].description);
		console.log(title);
	}

	function handleDescription(e){
		setDescription(e.target.value);
	}
     
	 function handleTitle(e){
		setTitle(e.target.value);
	 }

	
	 async function handleEdit(e){
		e.preventDefault();
		navigate("/uploaded-posts");
		let edit={
			title:title,
			description:description
		};
		
		var response=await fetch("http://localhost:8000/edit-post/"+id,{
			method: "POST",
			headers:{"Content-Type":"apllication/json"},
			body: JSON.stringify(edit)
		});
		response=await response.json();
		console.log("response: ");
		console.log(response);
		console.log("edit: ");
		console.log(edit);


		
		
		
	
}

}