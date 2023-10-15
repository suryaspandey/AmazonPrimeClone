import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { BiVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PlusOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { MdOutlineTrendingUp } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { Tooltip } from "antd";
import {
  videoSources,
  thumbnailImages,
  titleNames,
} from "../../Home_Comp/carouselData";
import Top10Cards from "./Top10Cards";
import { Link } from "react-router-dom";

const Top10Video = ({ showHeader }) => {
  const videoRef = useRef([]);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(true);
  const navigate = useNavigate();

  const [isMuted, setIsMuted] = useState(true);
  const projectId = "zxke0qiu2960";

  const handleVideoEnded = () => {
    if (currentIndex < videoSources.length - 1) {
      setCurrentIndex(currentIndex + 1);
      // onVideoChange(currentIndex + 1);
    } else {
      setCurrentIndex(0);
      // onVideoChange(0);
    }
  };

  let videoURL;
  const id = "1234";

  const handleVideoURL = (videoURL, title) => {
    localStorage.setItem("videoURL", videoURL);
    localStorage.setItem("title", title);
    localStorage.setItem("id", id);
    navigate(`/TVShow/1234`);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.addEventListener("ended", handleVideoEnded);
    }
  }, [currentIndex]);

  const handleSlideChange = (index) => {
    // Pause all videos when manually changing slides
    videoRef.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    setCurrentIndex(index);
  };

  return (
    <>
      {showHeader ? (
        <div className="cards-heaading">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <span className="prime-text-heading" style={{ marginRight: "8px" }}>
              Prime
            </span> */}

            <span className="card-indv-heading">Top 10 in India</span>
            <span className="seeMore">
              <MdOutlineTrendingUp
                className="seeMoreIcon-trending"
                style={{
                  fontSize: "30px",
                  border: "3px solid white",
                  borderRadius: "50%",
                }}
              />
            </span>
          </h2>
        </div>
      ) : (
        <div className="cards-heaading">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
            }}
          ></h2>
        </div>
      )}

      <div className="corousel-container">
        <Carousel
          showThumbs={false}
          // autoplay
          // infiniteLoop
          interval={5000}
          selectedItem={currentIndex}
          ref={carouselRef}
          dot={true}
          renderIndicator={false}
        >
          {videoSources.map((source, index) => (
            <>
              <div
                className="corousel-container-left-right"
                key={index}
                // style={{ height: "550px" }}
              >
                <div className="carousel-height">
                  <span className="home-main-text">New Episode Friday</span>
                  <picture className="home-corousel-pic">
                    {/* <img
                      className="amazon-original"
                      height={20}
                      width={50}
                      src="https://m.media-amazon.com/images/S/pv-target-images/7e5ebe135ef7e9f912cf8c29b6c9f4e22cab8ff78c0584a45c129cc1df33336e._AC_SX750_FMwebp_.png"
                      alt="amazon-otiginal"
                    /> */}
                    {/* <img
                                            className="series-name"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WheelOfTime_S2/8bc35ebc-7543-4156-b218-f20a535d9f91._AC_SX1500_FMwebp_.png"

                                            alt=""
                                        /> */}
                    <h2 className="series-name" style={{ color: "white" }}>
                      {titleNames[index]}
                    </h2>

                    {/* <button
                      className="carousel-play-btn"
                      onClick={() =>
                        handleVideoURL(videoSources[index], titleNames[index])
                      }
                    >
                      <img
                        src="/play-btn.PNG"
                        alt="play button"
                        width={50}
                        height={50}
                        style={{
                          borderRadius: "50%",
                        }}
                      />
                    </button> */}
                    <div
                    // className="included-with-prime"
                    >
                      <div className="prime-btn-UA">
                        <span className="blue-tick">
                          <img
                            className="blue-tick-img"
                            src="/prime-blue-tick.png"
                            alt="prime-blue-tick"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                        <span
                          className="prime-text"
                          style={{ color: "white", margin: "10px 0" }}
                        >
                          Included with Prime
                        </span>
                        <span className="UA-container">U/A 16+</span>
                      </div>

                      <div
                      // className="play-btn-text"
                      >
                        {/* <span className="play-text">Play S2 E1</span> */}
                        {/* </a> */}
                        <div className="watchlist-details-container">
                          <Link
                            to={`/TVShow/64cffee700bad552e8dcd509`}
                            state={{
                              projectId: projectId,
                            }}
                          >
                            <BsPlayFill
                              className="carousel-play-btn"
                              style={{
                                fontSize: "65px",
                              }}
                              // onClick={() =>
                              //   handleVideoURL(
                              //     videoSources[index],
                              //     titleNames[index]
                              //   )
                              // }
                            />
                          </Link>

                          <span className="play-text">Play</span>

                          <button className="watchlist-btn" title="Watchlist">
                            <PlusOutlined
                              // className="home-plus-watchlist-btn"
                              className="watchlist-icon-img"
                              style={{ fontSize: "30px" }}
                            />
                          </button>
                          <div>
                            <button className="watchlist-btn">
                              <Tooltip
                                title="Details"
                                placement="bottom"
                                arrow={false}
                                style={{ paddingTop: "10px" }}
                              >
                                {/* <span>
                                <GoDownload className="episode-download" />
                              </span> */}

                                <InfoCircleOutlined
                                  className="watchlist-icon-img"
                                  // className="home-plus-watchlist-btn"
                                  // style={{ gap: "10px" }}
                                  onClick={() => {
                                    navigate(
                                      "/watchDetails/64cffee700bad552e8dcd509"
                                    );
                                  }}
                                />
                                {/* <div style={{ marginBottom: "10px" }}></div> */}
                              </Tooltip>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </picture>
                </div>
                <div
                  className="top-10-video-container"
                  // className="right-content"
                  // style={{
                  //   position: "relative",
                  //   width: "100%",
                  //   // height: "38%",
                  //   // height: "200px",
                  //   // height: "100%",
                  //   backgroundColor: "#ffffff",
                  //   zIndex: "0",
                  // }}
                >
                  <div
                    className="video-banner-main"
                    // style={{ height: "100vh" }}
                    key={index}
                  >
                    <video
                      className="home-banner-video "
                      autoPlay
                      muted={isMuted}
                      ref={videoRef}
                      onEnded={handleVideoEnded}
                    >
                      <source src={source} type="video/mp4" />
                    </video>
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
                          // <BiVolumeMute />;
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </div>
      {/* <Top10Cards currentIndex={currentIndex} /> */}
      {/* <Top10Cards /> */}
    </>
  );
};

export default Top10Video;
