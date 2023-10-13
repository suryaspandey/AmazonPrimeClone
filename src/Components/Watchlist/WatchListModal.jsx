import React, { useState } from "react";
import { Button, Modal } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
const WatchListModal = ({
  selectedItem,
  handleRemoveFromWatchList,
  watchlistData,
  setWatchlistData,
}) => {
  const [open, setOpen] = useState(false);

  //   const handleRemove = () => {
  //     handleRemoveFromWatchList(selectedItem._id);
  //     const updatedWatchList = watchlistData.filter(
  //       (item) => item._id !== selectedItem._id
  //     );
  //     setWatchlistData(updatedWatchList);
  //   };
  const bearerToken = localStorage.getItem("bearer_token");
  const handleRemove = () => {
    fetch("https://academics.newtonschool.co/api/v1/ott/watchlist/like", {
      method: "PATCH",
      headers: {
        projectId: "zxke0qiu2960",
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify({
        showId: selectedItem._id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Show removed from watchlist successfully.", data);
        setOpen(false);
        handleRemoveFromWatchList(selectedItem._id);
      })
      .catch((error) => {
        console.error("Error removing item", error);
      });
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        <PiDotsThreeVerticalBold style={{ color: "white", fontSize: "20px" }} />
      </Button>
      <Modal
        title="Your Watchlist"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        // width={1000}
        style={{
          height: "100vh",
          bottom: "100px",
          position: "absolute",
          left: "0px",
          right: "0px",
          //   top: "0px",
        }}
      >
        <button
          className="watchlist-delete-container"
          style={{
            display: "flex",
            alignItems: "center",
            border: "none",
          }}
          onClick={handleRemove}
        >
          <RiDeleteBin6Line />
          <p>Remove from Watchlist</p>
        </button>
      </Modal>
    </>
  );
};
export default WatchListModal;
