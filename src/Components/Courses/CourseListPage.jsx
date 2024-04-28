import React from "react";
// import Header from "../Header";
import Footer from "../Footer";
import Cyber from "../../Assets/unnamed.jpg";
import ML from "../../Assets/Post.jpg";
import ML2 from "../../Assets/ML2.jpg";
import MainPageHeader from "../MainPageHeader";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourseListPage() {

	var navigate=useNavigate();

	var [courses,setCourses]=useState([]);
	useEffect(()=>{
		getCourses();

	},[]);
	return (
		<div>
			<MainPageHeader />
			{/* <div class="conatainer">
                 <div class="row">;
        {/* pictures.forEach((picture) => {
           <div class="col-sm-4"> <div class="card" style="width: 18rem;">
         <img src=${picture.thumbnailUrl} class="card-img-top" alt="image">
         <div class="card-body">
         <h5 class="card-title">${picture.title}</h5> */}

			{/* </div>
         </div>
         </div> */}
			<div className="container ">
				<br />
				<br />
				<br />
				<div className="row">
					{courses.map((course) => (
						<div class="col-sm-4">
							<div class="card card-my-style1 course-card-container" style={{width: "18rem"}}>
								<img src={course.pic} class="card-img-top" alt="user" />
								<div class="card-body1">
									<h5 class="card-title1">{course.title}</h5>
                                    <div className="course-description1">{course.description}</div>
									<div className="course-description1">{course.tutor}</div>
                                    <div class="course-price1">{course.price}</div>
									<button onClick={()=>{handleClick(course.id)}} className="btn btn-primary" id="course-button" >Explore!</button>
								</div>
							</div>
                            
						</div>
					))}
					{/* <div class="col-sm-4">
						<div class="card card-my-style1">
							<img src={Cyber} class="card-img1" alt="user" />
							<div class="card-body">
								<h5 class="card-title">Ethical Hacking</h5>
								<div className="course-description1">
									Learn pentesting and get certified
								</div>
								<div className="course-description1">Iliyas Shafi</div>
								<div class="course-price1">Rs 1000</div>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="card card-my-style1">
							<img src={ML} class="card-img1" alt="user" />
							<div class="card-body">
								<h5 class="card-title">Machine Learning</h5>
								<div className="course-description1">
									Dive into the field of machine learning
								</div>
								<div className="course-description1">Dr Chen Lee</div>
								<div class="course-price1">Rs 1500</div>
							</div>
						</div>
					</div>

					<div class="col-sm-4">
						<div class="card card-my-style1">
							<img src={ML2} class="card-img1" alt="user" />
							<div class="card-body">
								<h5 class="card-title">Data Science</h5>
								<div className="course-description1">
									Dive into the field of Data Science
								</div>
								<div className="course-description1">Dr Chen Lee</div>
								<div class="course-price1">Rs 1550</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
			<Footer />
		</div>
	);

	async function getCourses(){
		var response=await fetch("http://localhost:8000/allcourses");
		response= await response.json();
		//response is an array of objects
		setCourses(response);
		console.log(response[0]);

	}
	function handleClick(id){
		navigate(`/course/${id}`);
		
	}
}
