import React, { useEffect, useState } from "react";
import "./Blogs.css";
import SingleBlog from "../SingleBlog/SingleBlog";
import SideBar from "../SideBar/SideBar";
const Blogs = ({ addReadingTime, addBookMark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div>
        {blogs.map((blog) => (
          <SingleBlog
            addReadingTime={addReadingTime}
            addBookMark={addBookMark}
            blog={blog}
            key={blog.id}
          ></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
