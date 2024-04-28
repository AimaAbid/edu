//We have to use BrowserRouter in index.js acc to new version

import DashHeader from "./DashHeader";
import "../App.css";

import { Route, Routes, Link, BrowserRouter } from "react-router-dom";


export default function Dashboard() {
	return (
		//Dashboard
		<div>
			
			
			
			<ul className="sidebar">
				<li>Welcome User!</li>
				<li>
					<Link to="/details/1">Personal Details</Link>
				</li>
				<li>
					<Link to="/create-post">Create Post</Link>
				</li>
                <li>
					<Link to="/uploaded-posts">Uploaded Posts</Link>
				</li>
                <li>
					<Link to="/pending-posts">Pending Posts</Link>
				</li>
				
				
			</ul>

			
		</div>
	
	);
}

