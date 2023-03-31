import React from "react";
import './SideBar.css'
const SideBar = ({ times, texts }) => {
  return (
    
      <div className="sticky top-0 border m-[50px] ">
      <div className="bg-blue-50">
      <p className="rounded-md  p-10 font-semibold text-lg w-[100%]  text-[#6047EC]">Spent time on read : {times} min</p>
        </div>
        <div className="mt-5 bg-blue-50">
        <div>
        <p className="font-bold bookmark">Bookmarked Blogs : {texts.length}</p>
          {texts.map((text) => (
            <p className=" bg-[#FFFFFF] mt-4 w-[80%] mb-4 p-3 text-center mx-auto">{text}</p>
          ))}
          </div>
        </div>
      </div>
    
  );
};

export default SideBar;
