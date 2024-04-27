import React from "react";
// import Header from "../Header";
import Footer from "../Footer";
import Cyber from "../../Assets/unnamed.jpg";
import ML from "../../Assets/Post.jpg";
import ML2 from "../../Assets/ML2.jpg";
import MainPageHeader from "../MainPageHeader";

export default function CourseListPage() {
	var courseList = [
		{
			title: "Ethical Hacking",
			image: Cyber,
			price: "Rs 1000",
			tutor: "Iliyas Saif",
			description: "Learn pentesting and get certified",
		},
		{
			title: "Machine Learning",
			image: ML,
			price: "Rs 1500",
			tutor: "Dr Chen Lee",
			description: "Dive into the field of machine learning and data science",
		},
		{
			title: "Cyber Security",
			image: Image,
			price: "Rs 1000",
			tutor: "Aima",
			description: "A convenient course designed for you",
		},
		{
			title: "Cyber Security",
			image: Image,
			price: "Rs 1000",
			tutor: "Aima",
			description: "A convenient course designed for you",
		},
		{
			title: "Cyber Security",
			image: Image,
			price: "Rs 1000",
			tutor: "Aima",
			description: "A convenient course designed for you",
		},
		{
			title: "Cyber Security",
			image: Image,
			price: "Rs 1000",
			tutor: "Aima",
			description: "A convenient course designed for you",
		},
	];
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
			<div className="container">
				<br />
				<br />
				<br />
				<div className="row">
					{/* {courseList.map((course) => (
						<div class="col-sm-4">
							<div class="card card-my-style" style={{width: "18rem"}}>
								<img src={Image} class="card-img-top" alt="user" />
								<div class="card-body">
									<h5 class="card-title">{course.title}</h5>
                                    <div className="course-description">{course.description}</div>
									<div className="course-description">{course.tutor}</div>
                                    <div class="course-price">{course.price}</div>
								</div>
							</div>
                            
						</div>
					))} */}
					<div class="col-sm-4">
						<div class="card card-my-style" >
							<img src={Cyber} class="card-img" alt="user" />
							<div class="card-body">
								<h5 class="card-title">Ethical Hacking</h5>
								<div className="course-description">
									Learn pentesting and get certified
								</div>
								<div className="course-description">Iliyas Shafi</div>
								<div class="course-price">Rs 1000</div>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="card card-my-style" >
							<img src={ML} class="card-img" alt="user" />
							<div class="card-body">
								<h5 class="card-title">Machine Learning</h5>
								<div className="course-description">
								Dive into the field of machine learning 
								</div>
								<div className="course-description">Dr Chen Lee</div>
								<div class="course-price">Rs 1500</div>
							</div>
						</div>
						
					</div>

					<div class="col-sm-4">
						<div class="card card-my-style" >
							<img src={ML2} class="card-img" alt="user" />
							<div class="card-body">
								<h5 class="card-title">Data Science</h5>
								<div className="course-description">
								Dive into the field of Data Science
								</div>
								<div className="course-description">Dr Chen Lee</div>
								<div class="course-price">Rs 1550</div>
							</div>
						</div>
						
					</div>
				</div>

			</div>
			<Footer />
		</div>
	);
}
