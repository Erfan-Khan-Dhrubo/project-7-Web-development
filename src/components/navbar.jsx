import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className=" shadow-sm bg-white">
        <div className="xl:w-8/10 w-9/10 mx-auto navbar">
          <div className="navbar-start">
            <a className="text-2xl font-semibold">
              <p className="text-navbarBlue">
                Auction<span className="text-navbarYellow">Gallery</span>
              </p>
            </a>
          </div>
          <div className="navbar-center md:flex hidden">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Auctions</a>
              </li>
              <li>
                <a>Categories</a>
              </li>
              <li>
                <a>How to works</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex gap-4 items-center">
              <div className="bg-grey w-10 h-10 flex items-center justify-center rounded-full">
                <div className="indicator ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />{" "}
                  </svg>
                  <span className="badge badge-xs bg-black indicator-item text-white">
                    9
                  </span>
                </div>
              </div>

              <div className="w-10">
                <img
                  className="rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
