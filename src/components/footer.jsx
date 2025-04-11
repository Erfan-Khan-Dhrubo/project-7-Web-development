import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col justify-center items-center gap-3 text-center text-black p-16">
        <p className="text-navbarBlue text-xl font-semibold">
          Auction<span className="text-navbarYellow">Gallery</span>
        </p>
        <div className="flex gap-4 text-base justify-center">
          <p>Bid.</p>
          <p>Win.</p>
          <p>Own.</p>
        </div>
        <div className="flex sm:gap-12 gap-4 text-base">
          <p>Home</p>
          <p>Auctions</p>
          <p>Categories</p>
          <p className="whitespace-nowrap">How to works</p>
        </div>
        <p className="text-base whitespace-nowrap">
          © {new Date().getFullYear()} AuctionHub. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
