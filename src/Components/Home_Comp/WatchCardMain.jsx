import React, { useState } from "react";
import WatchCardsImage from "./WatchCardsImage";
import WatchCardImageVideo from "./WatchCardImageVideo";
import WatchCardsDescription from "./WatchCardsDescription";
import WatchCardsVideo from "./WatchCardsVideo";

const WatchCardMain = ({
  item,
  projectId,
  watchlistStatus,
  // isloggedIn,
  addtowatchlist,
  isInWatchList,
  handleRemoveFromWatchList,
  actualData,
  handleWatchList,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);
  return (
    <div
      // className="continue-watching-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={item._id}
    >
      <li
      // className="continue-wtching-li"
      >
        <div
          className="watchCardsContainer"
          style={{
            maxWidth: "250px",
            width: "250px",
            height: "100%",
            cursor: "pointer",
            position: "relative",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <WatchCardsImage
            item={item}
            projectId={projectId}
            watchlistStatus={watchlistStatus}
            isloggedIn={isloggedIn}
            addtowatchlist={addtowatchlist}
            isInWatchList={isInWatchList}
            // handleRemoveFromWatchList={handleRemoveFromWatchList}
            actualData={actualData}
          />

          {isHovered && (
            <div
              className="hover"
              style={{
                zIndex: 99,
                width: "100%",
                height: "max-content",

                position: "absolute",
                top: "0vh",

                left: 0,
                borderRadius: " 0.3rem",

                transition: "0.3s ease-in-out",
              }}
            >
              <div
                className="image-video-container"
                style={{
                  position: "relative",
                  height: "150px",
                }}
              >
                <img
                  src={item.thumbnail}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    zIndex: 4,
                    top: 0,
                    position: "absolute",
                  }}
                />
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
              </div>
              <div
                className="info-container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "black",
                  position: "absolute",
                  top: "170px",
                  zIndex: 199,
                  borderRadius: "8px",
                  boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.9)",
                }}
              >
                <WatchCardsDescription
                  item={item}
                  projectId={projectId}
                  watchlistStatus={watchlistStatus}
                  isloggedIn={isloggedIn}
                  addtowatchlist={addtowatchlist}
                  isInWatchList={isInWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  actualData={actualData}
                  handleWatchList={handleWatchList}
                />
              </div>
            </div>
          )}
        </div>
      </li>
    </div>
  );
};

export default WatchCardMain;
