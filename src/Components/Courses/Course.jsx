import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Course() {
    var [course,setCourse]=useState({});
    var {id}=useParams();
	useEffect(() => {
		getCourse();
	},[]);
	return (
		<div>
			<h1>Course</h1>
            {course.title}
            {course.description}
            {course.tutor}
            {course.price}
           
		</div>
	);

	async function getCourse() {
		var response = await fetch("http://localhost:8000/course/"+id);
		response = await response.json();
		console.log(response);
        setCourse(response[0]);

	}
}
