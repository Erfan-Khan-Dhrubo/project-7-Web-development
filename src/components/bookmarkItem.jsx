import React from "react";
import { MdCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const BookmarkItem = ({ item, handleRemoveItem }) => {
  return (
    <div className="py-2 px-4">
      <div className=" flex p-4 justify-between text-tableText border border-tableBorder rounded-3xl">
        <div className="flex gap-4 text-base items-center">
          <img
            className="md:w-24 w-20 md:h-24 h-20 object-cover border "
            src={item.image}
            alt=""
          />
          <div className="flex flex-col gap-2">
            <p>{item.title}</p>
            <div className="flex gap-10">
              <p>${item.currentBidPrice}</p>
              <p>Bids: {item.bidsCount}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-2">
          <button onClick={() => handleRemoveItem(item)}>
            <AiOutlineClose size={20} color="tableText" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkItem;
