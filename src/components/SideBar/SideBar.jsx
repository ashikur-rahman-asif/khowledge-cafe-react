import React from "react";

const SideBar = ({ times, texts }) => {
  return (
    <div>
      <div className="sticky top-0">
        <p className="rounded-md bg-blue-100 p-10 font-semibold text-lg w-[100%]">Spent time on read : {times} min</p>
        <div className="card bg-secondary bg-opacity-25">
          <p className="fw-bold">Bookmarked Blogs : {texts.length}</p>
          {texts.map((text) => (
            <p className="card bg-white">{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
