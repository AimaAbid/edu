import React from "react";
import SearchBar from "./SearchBar";
import Post from "./Post";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MainPageHeader from "./MainPageHeader";

export default function MainPage() {
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
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
			<Footer />
		</div>
	
	);
}
