import React from "react";
import WatchCardsImage from "./WatchCardsImage";
import WatchCardsVideo from "./WatchCardsVideo";
import WatchCardsDescription from "./WatchCardsDescription";

const WatchCardImageVideo = ({
  item,
  projectId,
  watchlistStatus,
  isloggedIn,
  addtowatchlist,
  isInWatchList,
  handleRemoveFromWatchList,
  actualData,
  isHovered,
}) => {
  return (
    <>
      {isHovered ? (
        <>
          <div
            className="hover"
            style={{
              zIndex: 99,
              height: "max-content",
              width: "20rem",
              position: "absolute",
              top: "-18vh",
              left: 0,
              borderRadius: " 0.3rem",
              boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
              backgroundColor: "#181818",
              transition: "0.3s ease-in-out",
            }}
          >
            <WatchCardsVideo
              item={item}
              projectId={projectId}
              watchlistStatus={watchlistStatus}
              isloggedIn={isloggedIn}
              addtowatchlist={addtowatchlist}
              isInWatchList={isInWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              actualData={actualData}
              isHovered={isHovered}
            />
            <WatchCardsDescription
              item={item}
              projectId={projectId}
              watchlistStatus={watchlistStatus}
              isloggedIn={isloggedIn}
              addtowatchlist={addtowatchlist}
              isInWatchList={isInWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              actualData={actualData}
            />
          </div>
        </>
      ) : (
        <WatchCardsImage
          item={item}
          projectId={projectId}
          watchlistStatus={watchlistStatus}
          isloggedIn={isloggedIn}
          addtowatchlist={addtowatchlist}
          isInWatchList={isInWatchList}
          handleRemoveFromWatchList={handleRemoveFromWatchList}
          actualData={actualData}
          isHovered={isHovered}
        />
      )}
    </>
  );
};

export default WatchCardImageVideo;
