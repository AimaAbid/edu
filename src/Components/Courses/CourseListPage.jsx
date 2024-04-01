import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "../../Assets/unnamed.jpg";
import MainPageHeader from "../MainPageHeader";

export default function CourseListPage() {
	var courseList = [
		{
			title: "Cyber Security",
			image: Image,
            price:"Rs 1000",
			tutor:"Aima"
            ,description:"A convenient course designed for you"
		},
		{
			title: "Cyber Security",
			image: Image,
            price:"Rs 1000"
			,tutor:"Aima"
            ,description:"A convenient course designed for you"
		},
		{
			title: "Cyber Security",
			image: Image,
            price:"Rs 1000"
			,tutor:"Aima"
            ,description:"A convenient course designed for you"
		},
        {
			title: "Cyber Security",
			image: Image,
            price:"Rs 1000"
			,tutor:"Aima"
            ,description:"A convenient course designed for you"
		},
        {
			title: "Cyber Security",
			image: Image,
            price:"Rs 1000"
			,tutor:"Aima"
            ,description:"A convenient course designed for you"
		},
        {
			title: "Cyber Security",
			image: Image,
            price:"Rs 1000"
			,tutor:"Aima"
            ,description:"A convenient course designed for you"
		}
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
                <br /><br /><br />
				<div className="row">
					{courseList.map((course) => (
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
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
