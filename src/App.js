import Signup from "./Components/Signup";
// import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
// import Login from "./Components/Login";
import Home from "./Components/Home";
import "./App.css";
import MainPage from "./Components/MainPage";
import UserPage from "./Components/UserPage";
import PersonalDetails from "./Components/UserPageLinks/PersonalDetails";
import CreatePost from "./Components/UserPageLinks/CreatePost";
import UploadedPosts from "./Components/UserPageLinks/UploadedPosts";
import PendingPosts from "./Components/UserPageLinks/PendingPosts";
import CourseListPage from "./Components/Courses/CourseListPage";
import AlumniAbout from "./Alumni/AlumniAbout";
import Course from "./Components/Courses/Course";
import CreateCourses from "./Components/Courses/CreateCourses";
import UploadedCourses from "./Components/Courses/UploadedCourses";
import Post from "./Components/UserPageLinks/Post";
import PostNoEdit from "./Components/PostNoEdit";
import EditPage from "./Components/UserPageLinks/EditPage";
import Loginstudent from "./Components/Register/Loginstudent";
import Checkout from "./CheckOutForm";
import AlumniLogin from "./Components/Register/AlumniLogin";
import SearchedPosts from "./Components/SearchedPosts";
import Sponsor from "./Components/Register/Sponsor";

//for now since we dont have login or signup logic we paste posts in routes "/"

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
				{/* the below one is actually login, its for development purposes i have put mainpage there */}
				<Route path="/login" element={<Loginstudent />}></Route>
				<Route path="/main-page" element={<MainPage />}></Route>
				<Route path="/user" element={<UserPage />}></Route>
				<Route path="/details/:id" element={<PersonalDetails />}></Route>
				<Route path="/create-post" element={<CreatePost />}></Route>
				<Route path="/uploaded-posts" element={<UploadedPosts />}></Route>
				<Route path="/pending-posts" element={<PendingPosts />}></Route>
				<Route path="/course-list" element={<CourseListPage />}></Route>
				<Route path="/alumni-about" element={<AlumniAbout />}></Route>
				<Route path="/checkout-form" element={<Checkout />}></Route>
				<Route path="/alumni-login" element={<AlumniLogin />}></Route>
				<Route path="/course/:id" element={<Course />}></Route>
				<Route path="/create-course" element={<CreateCourses />}></Route>
				<Route path="/uploaded-courses" element={<UploadedCourses />}></Route>
				<Route path="/post/:id" element={<Post />}></Route>
				<Route path="/general-post/:id" element={<PostNoEdit />}></Route>
				<Route path="/edit/:id" element={<EditPage />}></Route>
				<Route path="/searched-posts" element={<SearchedPosts />}></Route>
				<Route path="/sponsor" element={<Sponsor />}></Route>
			</Routes>
		</div>
	);
}

export default App;
