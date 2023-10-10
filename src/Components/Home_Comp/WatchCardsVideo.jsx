import React, { useState } from "react";
import { BiVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import WatchCardsDescription from "./WatchCardsDescription";
import WatchCardsImage from "./WatchCardsImage";

const WatchCardsVideo = ({
  item,
  projectId,
  isloggedIn,
  watchlistStatus,
  handleRemoveFromWatchList,
  addtowatchlist,
  isInWatchList,
  actualData,
  isHovered,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  return (
    <>
      {/* <div className="video-btns-container"> */}

      <Link to={`/watchDetails/${item._id}`} state={{ projectId: projectId }}>
        <video
          style={{
            width: "100%",
            height: "270px",
            objectFit: "cover",
            borderRadius: "0.3rem",
            top: "0px",
            zIndex: 5,
            position: "absolute",
          }}
          // className="watch-details-video"
          src={item.video_url}
          autoPlay={true}
          loop
          muted={isMuted}
          onMouseEnter={() => {
            setIsVideoHovered(true);
          }}
          onMouseLeave={() => {
            setIsVideoHovered(false);
          }}
        />
      </Link>
      {!isHovered && (
        <>
          {isMuted ? (
            <BiVolumeMute
              className="volume-btn mute"
              onClick={() => {
                setIsMuted(false);
              }}
            />
          ) : (
            <GoUnmute
              className="volume-btn unmute"
              onClick={() => {
                setIsMuted(true);
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default WatchCardsVideo;
