// import { Editor } from "@tinymce/tinymce-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import React from "react";
import DashHeader from "../DashHeader";
import Dashboard from "../Dashboard";
import "./Createpost.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreatePost() {
	const [post, setPost] = useState({
		title: "",
		subject: "",
		description: "",
		file: "",
		userId: "",
		mainBody: "Aima",
	});
	const [image, setImage] = useState("");
	const [value, setValue] = useState("");
	const [userId] = localStorage.getItem("userId");
	const navigate = useNavigate();

	const handleChange = (e) => {
		setPost({ ...post, [e.target.name]: e.target.value });
	};

	const handleMedia = async (e) => {
		const formData = new FormData();
		for (let i = 0; i < e.target.files.length; i++) {
            formData.append("filename", e.target.files[i]);
        }
		const response = await axios.post("http://localhost:8000/posts/up", formData);

        console.log(response.data);
        // setImgPath(response.data);
		
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("userId in handleSubmit:", userId); // Add this line to check userId value

		try {
			const postData = {
				...post,
				userId: userId,
			};

			const response = await fetch("http://localhost:8000/addpost", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(postData),
			});
			if (response.ok) {
				alert("Post Added Successfully");
				navigate("/uploaded-posts");
			} else {
				alert("Failed to add post");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div>
			<DashHeader />
			<Dashboard />

			<div className="position-adjustment">
				<div className="craete-auth">
					<div className="form">
						<div className="form-group">
							<input
								type="text"
								className="form-control input-title"
								placeholder="Title"
								name="title"
								onChange={handleChange}
							/>
						</div>

						<div className="form-group">
							<select
								onChange={handleChange}
								name="subject"
								className="form-control"
							>
								<option>Computer network</option>
								<option>Automata</option>
								<option>Compiler</option>
								<option>DBMS</option>
								<option>Data Structure</option>
								<option>Microprocessor</option>
							</select>
						</div>

						<div className="form-group ">
							<ReactQuill
								className="editor size"
								theme="snow"
								value={value}
								s
								onChange={setValue}
							/>
						</div>
						<input type="file" onChange={handleMedia} />

						<button className="btn btn-success" onClick={handleSubmit}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
