//import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const AuctionItem = ({ item, handleBookmark, bookmarkItem }) => {
  //const [heartBtn, setHeartBtn] = useState(false);

  const heartBtn = bookmarkItem.find((items) => items.id === item.id);
  // const handleHeartButton = () => {
  //   heartBtn ? setHeartBtn(false) : setHeartBtn(true);
  // };
  return (
    <tbody className="text-tableText">
      <tr className="border-b border-tableBorder">
        <td className="flex p-4 pl-8 gap-6 items-center">
          <img
            className="md:w-24 w-20  md:h-24 h-20 object-cover"
            src={item.image}
            alt=""
          />
          <div className="hidden md:flex">{item.title}</div>
        </td>
        <td className="text-center">${item.currentBidPrice}</td>
        <td className="text-center hidden lg:table-cell h-full">
          {item.timeLeft} Left
        </td>
        <td>
          <div className="flex justify-center items-center">
            <button
              disabled={heartBtn}
              className={heartBtn ? "cursor-not-allowed" : "cursor-pointer"}
              onClick={() => {
                handleBookmark(item);
                // handleHeartButton();
              }}
            >
              {heartBtn ? (
                <FaHeart size={20} color="red" /> // Filled heart
              ) : (
                <FaRegHeart size={20} color="tableText" /> // Unfilled heart
              )}
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default AuctionItem;
