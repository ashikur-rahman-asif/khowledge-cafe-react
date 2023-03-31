import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./SingleBlog.css";
const SingleBlog = ({ blog, addReadingTime, addBookMark }) => {
  const {
    id,
    authorName,
    authorImage,
    bookTitle,
    bookCoverImage,
    readTime,
    date,
  } = blog;
  const [bookmarked, setBookmarked] = useState(false);
  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    addBookMark(bookTitle);
  };

  return (
    <div className="mb-3">
      <div className="card">
        <img src={bookCoverImage} className="card-img-top" alt="" />
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div className="">
                <img
                  src={authorImage}
                  className="w-[70px] h-[70px] rounded-md"
                  alt=""
                />
              </div>
              <div>
                <p className="mb-0 font-bold text-[3rem]">{authorName}</p>
                <p>{date}</p>
              </div>
            </div>
            <div className="flex items-start">
              <p>{readTime} min read</p>
              <button onClick={toggleBookmark} className="border-0 bg-body">
                <FontAwesomeIcon
                  icon={faBookmark}
                  color={bookmarked ? "red" : "black"}
                />
              </button>
            </div>
          </div>
          <h5 className="card-title text-[4.5rem] my-2">{bookTitle}</h5>
          <p className="card-text text-secondary">#beginners #programming</p>
          <a href="#" onClick={() => addReadingTime(time)}>
            Mark as read
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
