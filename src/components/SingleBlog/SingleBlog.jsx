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
    <div className="mb-3 mr-3">
      <div className="card">
        <img src={bookCoverImage} className="h-[450px]" alt="" />
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div className="">
                <img
                  src={authorImage}
                  className="w-[70px] h-[70px] rounded-full"
                  alt=""
                />
              </div>
              <div>
                <p className="mb-0 font-bold text-xl">{authorName}</p>
                <p>{date}</p>
              </div>
            </div>
            <div className="flex items-start">
              <p className="mr-1">{readTime} min read</p>
              <button onClick={toggleBookmark} className="border-0 bg-body">
                <FontAwesomeIcon
                  icon={faBookmark}
                  color={bookmarked ? "red" : "black"}
                />
              </button>
            </div>
          </div>
          <h5 className="card-title text-2xl my-2">{bookTitle}</h5>
          <p className="mt-3 text-[rgba(17, 17, 17, 0.6)]">#beginners #programming</p>
          <a href="#" className="text-[#6047EC] underline underline-offset-1" onClick={() => addReadingTime(readTime)}>
            Mark as read
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
