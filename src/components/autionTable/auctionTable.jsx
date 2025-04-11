import React, { useEffect, useState } from "react";
import AuctionItem from "./auctionItem";

const AuctionTable = ({ handleBookmark, bookmarkItem }) => {
  const [auctionItem, setAuctionItem] = useState([]);

  //Loading Data
  useEffect(() => {
    fetch("item.json")
      .then((res) => res.json())
      .then((data) => setAuctionItem(data));
  }, []);
  return (
    <div className="rounded-3xl overflow-hidden">
      <table className="min-w-full  bg-white ">
        <thead>
          <tr className="text-black text-lg border-b border-tableBorder">
            <th className="pl-8 py-8 font-medium text-left ">Items</th>
            <th className="p-4 font-medium text-center whitespace-nowrap">
              Current Bid
            </th>
            <th className="p-4 font-medium text-center whitespace-nowrap py-8 lg:flex hidden h-full">
              Time Left
            </th>
            <th className="p-4 font-medium text-center whitespace-nowrap">
              Bid Now
            </th>
          </tr>
        </thead>

        {auctionItem.map((item) => (
          <AuctionItem
            key={item.id}
            item={item}
            handleBookmark={handleBookmark}
            bookmarkItem={bookmarkItem}
          ></AuctionItem>
        ))}
      </table>
    </div>
  );
};

export default AuctionTable;
