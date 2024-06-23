import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Createpost.css";


export default function EditPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [subject, setSubject] = useState("");
  const [post, setPost] = useState({
    title: "",
    subject: "",
    description: "",
    file: "",
    userId: "1",
    username: "Aima",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("http://localhost:8000/viewpost/" + id);
    const data = await res.json();
    const postData = data[0];
    setTitle(postData.title);
    setDescription(postData.description);
    setSubject(postData.subject);
    setPost(postData);
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setPost({ ...post, title: e.target.value });
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
    setPost({ ...post, subject: e.target.value });
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
    setPost({ ...post, description: e.target.value });
  };

  const handleMedia = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const response = await fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setFile(data.imgPath);
    setPost({ ...post, file: data.imgPath });
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/edit-post/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    alert("Post Edited successfully");
    navigate("/uploaded-posts");
  };

  return (
    <div>
      <div className="dash-header ">
        <div className="both" id="left">
          <i className="fa fa-rss" aria-hidden="true">
            &nbsp;
          </i>
          EduCollabHub
        </div>

        <div className="both" id="dash-right">
          <Link to={`/post/${id}`}>Go Back</Link>
        </div>
      </div>

      <div className="vertical-adjustment">
        <div className="auth">
          <div className="form">
            <div className="form-group">
              <input
                type="text"
                className="form-control input-title"
                value={title}
                placeholder="Title"
                onChange={handleTitle}
              />
            </div>
            <div className="form-group">
              <select
                value={subject}
                onChange={handleSubject}
                name="subject"
              >
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
                className="form-control input-body"
                value={description}
                placeholder="Body"
                onChange={handleDescription}
                name="description"
              />
            </div>
            <input type="file" onChange={handleMedia} />

            <button className="btn btn-success" onClick={handleEdit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
