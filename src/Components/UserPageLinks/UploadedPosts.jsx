import React from "react";
import DashHeader from "../DashHeader";
import Dashboard from "../Dashboard";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadedPosts() {
	var [uploadedPosts,setUploadedPosts] =useState([]);
	var navigate=useNavigate();
	useEffect(() =>{
		getUploadedPosts();

	},[]);
	return (
		<div>
			<DashHeader />
			<Dashboard />
			<div className="position-adjustment">
      <div className="container">
				<div className="table-heading">Uploaded Posts</div>
				<br />
       
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>Post Title</th>
							<th>Upload Date</th>
							<th>Action</th>
						</tr>
					</thead>
					{/* <tbody>
						<tr>
							<td>The Future of Computing: Trends and Predictions for the Next Decade"</td>
							<td>05-02-2024</td>
							<td><button className="btn btn-info">View</button></td>
						</tr>
						<tr>
							<td>Big Data Analytics: Leveraging Data for Insights and Innovation</td>
							<td>06-02-2024</td>
						</tr>
						<tr>
							<td>The Rise of Quantum Computing: Revolutionizing Information Processing</td>
							<td>08-02-2024</td>
						</tr>
						<tr>
							<td>Cyber Threats-Ransomware,Phishing and Social Engineering</td>
							<td>08-02-2024</td>
						</tr>
            <tr>
							<td>Kubernetes and Cloud Computing</td>
							<td>09-02-2024</td>
						</tr>
						<tr>
							<td>React Life Cyle and Hooks</td>
							<td>09-02-2024</td>
						</tr>
						<tr>
							<td>The Internet of Things : Connecting the World Through Smart Devices</td>
							<td>09-02-2024</td>
						</tr>
						<tr>
							<td>There I was</td>
							<td>09-02-2024</td>
						</tr>
					</tbody> */}
					<tbody>
						{uploadedPosts.map((post)=>(
							<tr>
							<td>{post.title}</td>
							<td>{post.uploadDate}</td>
							<td><button className="btn btn-info" onClick={()=>{handleView(post.id)}}>View</button></td>
						</tr>
						))}

					</tbody>
				</table>
        </div>
			</div>
		</div>
	);
	async function getUploadedPosts(){
		var response= await fetch("http://localhost:8000/post/1");//change this with id when login logic is implemented and login gives id
		response=await response.json();
		console.log(response);
		setUploadedPosts(response);
	}

	function handleView(id){
		navigate(`/post/${id}`);

	}
}
