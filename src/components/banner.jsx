import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div
        className="bg-cover bg-center h-[70vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/mFtJx7MC/Banner-min.jpg)",
        }}
      >
        <div className=""></div>
        <div className="text-neutral-content xl:w-8/10 w-9/10 mx-auto flex items-center h-full">
          <div className="flex flex-col gap-6">
            <h1 className="text-white md:text-4xl text-2xl font-semibold">
              Bid on Unique Items from <br /> Around the World
            </h1>
            <p className="md:text-xl text-white text-lg">
              Discover rare collectibles, luxury goods, and vintage <br />{" "}
              treasures in our curated auctions
            </p>
            <div>
              <button className="btn btn-primary text-black bg-white rounded-4xl border-none">
                Explore Auction
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
