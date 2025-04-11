import { FaRegHeart } from "react-icons/fa";
import BookmarkItem from "./bookmarkItem";

const BookMark = ({ bookmarkItem, handleRemoveItem }) => {
  // calculating bid
  const bid = () => {
    let total = 0;
    for (const item of bookmarkItem) {
      total += item.currentBidPrice;
    }
    return total;
  };

  return (
    <div className="bg-white rounded-3xl">
      <div className="flex text-2xl font-medium gap-2 justify-center items-center p-4">
        {<FaRegHeart />} Favorite Items
      </div>
      <hr className="text-tableBorder mb-4" />
      {bookmarkItem.length === 0 && (
        <div className="py-10 flex flex-col gap-4 text-center">
          <h3 className="text-xl">No Favorites Yet</h3>
          <p className="text-base font-light">
            Click the heart icon on any item <br /> to add it to your favorites
          </p>
        </div>
      )}
      <div>
        {bookmarkItem.map((item) => (
          <BookmarkItem
            key={item.id}
            item={item}
            handleRemoveItem={handleRemoveItem}
          ></BookmarkItem>
        ))}
      </div>
      <hr className="text-tableBorder mt-4" />
      <div className="text-xl flex justify-between px-4 py-6">
        <p>Total bids Amount</p>
        <p>
          $<span>{bid()}</span>
        </p>
      </div>
    </div>
  );
};

export default BookMark;
