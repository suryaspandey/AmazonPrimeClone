import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCheck, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import WatchCardMain from "./WatchCardMain";
import MobileAddToWatchList from "../Watchlist/MobileAddToWatchList";
import { Link } from "react-router-dom";

const CARD_WIDTH = 250;
const WatchCards = ({
  actualData,
  projectId,
  handleRemoveFromWatchList,
  isInWatchList,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // const [isMuted, setIsMuted] = useState(true);

  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const [addtowatchlist, setAddTowatchlist] = useState("false");

  const [watchlistStatus, setWatchlistStatus] = useState(() => {
    const initialStatus = {};
    actualData.forEach((item) => {
      initialStatus[item._id] = false;
    });
    return initialStatus;
  });

  const watchlistUpdateAPI =
    "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
  const bearerToken = localStorage.getItem("bearer_token");

  const handleWatchList = (id) => {
    if (!isloggedIn) {
      window.location.href = "/login";
      return;
    }

    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    };

    const body = {
      showId: id,
    };

    fetch(watchlistUpdateAPI, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((watchData) => {
        setWatchlistStatus((prevStatus) => ({
          ...prevStatus,
          [id]: !prevStatus[id], // Toggle the status
        }));
        setAddTowatchlist(true);
        handleRemoveFromWatchList(id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);

  const [showControls, setShowControls] = useState(false);

  const handleDirection = (direction) => {
    let distance = CARD_WIDTH + 10;
    // let distance = listRef.current.getBoundingClientRect().x - 70;
    // let distance = listRef.current.getBoundingClientRect().x - 1;

    if (direction === "left" && sliderPosition > 0) {
      if (sliderPosition === 1) {
        listRef.current.style.transform = `translateX(0px)`;
      } else {
        listRef.current.style.transform = `translateX(${
          sliderPosition * -distance
        }px)`;
      }
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < actualData.length - 1) {
      const nextPosition = sliderPosition + 1;

      if ((nextPosition + 1) * distance > listRef.current.offsetWidth) {
        listRef.current.style.transform = `translateX(${-(
          nextPosition * distance -
          listRef.current.offsetWidth
        )}px)`;
      } else {
        listRef.current.style.transform = `translateX(${
          -nextPosition * distance
        }px)`;
      }

      // if (sliderPosition === actualData.length - 2) {
      //   listRef.current.style.transform = `translateX(${-distance}px)`;
      // } else {
      //   listRef.current.style.transform = `translateX(${
      //     (sliderPosition + 2) * -distance
      //   }px)`;
      // }
      // setSliderPosition(sliderPosition + 1);
      setSliderPosition(nextPosition);
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 414);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  if (className === "seeMoreList") {
    return (
      <>
        {/* <h1 style={{ color: "white" }}>{`${className}  is the classname`}</h1> */}
        <div
          style={{
            // display: "flex",
            gap: "1rem",
            position: "relative", //-->
            padding: "1rem 0",
          }}
          showControls={showControls}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          // className={`cards-container ${className}`}
        >
          <div>
            {console.log("classname recieved", className)}
            <ul
              className={`${className}`}
              style={{
                // new
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "10px",
              }}
            >
              {actualData.map((item, index) => (
                <div
                  className={`actual-card ${className}`}
                  key={item._id}
                  style={{
                    overflow: "visible",
                  }}
                >
                  <WatchCardMain
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
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="wrapper-main mob-wrapper-main"
        style={{
          display: "flex",
          gap: "1rem",
          position: "relative", //-->
          padding: "1rem 0",
        }}
        showControls={showControls}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        // className={`cards-container ${className}`}
      >
        <div className="wrapper">
          {/* <div className={`slider-action left ${!showControls ? "none" : ""}`}> */}
          <div
            className={`slider-action left ${
              sliderPosition === 0 ? "none" : ""
            }`}
          >
            <AiOutlineLeft
              onClick={() => handleDirection("left")}
              style={{ color: "white", fontSize: "40px" }}
            />
          </div>
          <div
            className="slider"
            ref={listRef}
            style={{
              width: "max-content",
              gap: "1rem",
              transform: "translateX(0px)",
              transition: "0.3s ease-in-out",
              marginLeft: "50px",
            }}
          >
            {console.log("classname recieved", className)}
            <ul
              className="complete-cards-ul"
              // className={`${className}`}
              // className="complete-cards-ul"
              // className="continue-watching-ul"
              style={
                {
                  // display: "flex",
                  // position: "relative",
                  // height: "150px",
                  // overflow: "visible",
                  // zIndex: 1001,
                  // new
                  // display: "grid", // Apply grid layout
                  // gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  // gap: "10px",
                }
              }
            >
              {actualData.map((item, index) => (
                <div
                  className={`actual-card ${className}`}
                  key={item._id}
                  style={{
                    position: "absolute",

                    left: `${index * (CARD_WIDTH + 10)}px`,
                    // zIndex: 1002,
                    overflow: "visible",

                    // new
                    // position: "relative",
                  }}
                >
                  <WatchCardMain
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
              ))}
            </ul>
          </div>
          <div
            className={`slider-action right ${
              sliderPosition >= actualData.length - 2 ? "none" : ""
            } `}
            // className={`slider-action right ${!showControls ? "none" : ""} `}
          >
            <AiOutlineRight
              onClick={() => handleDirection("right")}
              style={{ color: "white", fontSize: "40px" }}
            />
          </div>
        </div>
      </div>

      {/* <div className={`cards-container ${className}`}> this classname is coming from CompleteShowList
         to display the content in grid  */}
    </>
  );
};

export default WatchCards;
