import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 415);
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      {/* <div className="video-btns-container"> */}

      <Link
        to={
          isMobile
            ? `/watchDetailsMob/${item._id}`
            : `/watchDetails/${item._id}`
        }
      >
        <video
          style={{
            width: "100%",
            height: "270px",
            // objectFit: "cover",
            borderRadius: "0.3rem",
            top: "-60px",
            zIndex: 5,
            position: "absolute",
            background: "black",
          }}
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
      {isHovered && (
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
