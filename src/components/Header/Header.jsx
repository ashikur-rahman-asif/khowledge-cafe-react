import React from "react";

const Header = () => {
  return (
    <div className="mx-32">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Knowledge House</h1>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="../../../public/stock.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
