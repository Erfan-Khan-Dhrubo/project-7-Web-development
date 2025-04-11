import "./App.css";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import AuctionTable from "./components/autionTable/auctionTable";
import BookMark from "./components/bookMark";
import Footer from "./components/footer";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  // Toast
  const notifyAdd = () =>
    toast(
      <div className="flex items-center">
        <span className="mr-2">🦄 </span>
        Item Added to your Favorite Lists !
      </div>
    );

  const notifyRemove = () =>
    toast.warning(
      <div className="flex items-center">
        <span className="mr-2">🦄 </span>
        Item Removed From Favorites !
      </div>
    );
  // Storing the Bookmark items
  const [bookmarkItem, setBookmarkItem] = useState([]);

  const handleBookmark = (markItems) => {
    const newItem = [...bookmarkItem, markItems];
    setBookmarkItem(newItem);
    notifyAdd();
  };

  const handleRemoveItem = (itemToRemove) => {
    setBookmarkItem((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
    notifyRemove();
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="bg-backGround py-16">
        <div className="lg:w-8/10 w-9/10 mx-auto pb-8">
          <h5 className="md:text-3xl text-2xl text-tableText py-2">
            Active Auction
          </h5>
          <p className="md:text-xl text-lg font-normal">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="xl:w-8/10 w-9/10 mx-auto flex flex-col-reverse md:flex-row gap-8">
          <div className="md:flex-2/3">
            <AuctionTable
              handleBookmark={handleBookmark}
              bookmarkItem={bookmarkItem}
            ></AuctionTable>
          </div>
          <div className="md:flex-1/3">
            <BookMark
              bookmarkItem={bookmarkItem}
              handleRemoveItem={handleRemoveItem}
            ></BookMark>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer></Footer>
    </>
  );
}

export default App;
