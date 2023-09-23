import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { BiVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PlusOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { MdOutlineTrendingUp } from "react-icons/md";
import {
    videoSources,
    thumbnailImages,
    titleNames,
} from "../../Home_Comp/carouselData";
import Top10Cards from "./Top10Cards";

const Top10Video = () => {
    const videoRef = useRef([]);
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHighlighted, setIsHighlighted] = useState(true);
    const navigate = useNavigate();

    const [isMuted, setIsMuted] = useState(true);

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
            <div className="cards-heaading">
                <h2
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <span
                        className="prime-text-heading"
                        style={{ marginRight: "8px" }}
                    >
                        Prime
                    </span>

                    <span className="card-indv-heading">Top 10 in India</span>
                    <span className="seeMore">
                        <MdOutlineTrendingUp
                            style={{
                                fontSize: "30px",
                                border: "3px solid white",
                                borderRadius: "50%",
                            }}
                        />
                    </span>
                </h2>
            </div>
            <div className="corousel-container">
                <Carousel
                    showThumbs={false}
                    autoplay
                    infiniteLoop
                    interval={5000}
                    selectedItem={currentIndex}
                    ref={carouselRef}
                    dot={false}
                    renderIndicator={false}
                >
                    {videoSources.map((source, index) => (
                        <>
                            <div
                                className="corousel-container-left-right"
                                style={{ height: "550px" }}
                            >
                                <div
                                    // className="left-content"
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        // left: "10%",
                                        width: "30%",
                                        height: "100%",
                                        backgroundColor: "transparent",
                                        zIndex: "1",
                                    }}
                                >
                                    <span className="home-main-text">
                                        New Episode Friday
                                    </span>
                                    <picture className="home-corousel-pic">
                                        <img
                                            className="amazon-original"
                                            height={20}
                                            width={50}
                                            src="https://m.media-amazon.com/images/S/pv-target-images/7e5ebe135ef7e9f912cf8c29b6c9f4e22cab8ff78c0584a45c129cc1df33336e._AC_SX750_FMwebp_.png"
                                            alt="amazon-otiginal"
                                        />
                                        {/* <img
                                            className="series-name"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WheelOfTime_S2/8bc35ebc-7543-4156-b218-f20a535d9f91._AC_SX1500_FMwebp_.png"

                                            alt=""
                                        /> */}
                                        <h2
                                            className="series-name"
                                            style={{ color: "white" }}
                                        >
                                            {titleNames[index]}
                                            {/* {currentIndex} */}
                                        </h2>

                                        <button
                                            onClick={() =>
                                                handleVideoURL(
                                                    videoSources[index],
                                                    titleNames[index]
                                                )
                                            }
                                            style={{
                                                // height: "20px",
                                                // width: "30px",
                                                color: "black",
                                                cursor: "pointer",
                                                background: "white",
                                                borderRadius: "50%",
                                                border: "none",
                                            }}
                                        >
                                            <img
                                                src="play-btn.PNG"
                                                alt="play button"
                                                width={50}
                                                height={50}
                                                style={{
                                                    borderRadius: "50%",
                                                }}
                                            />
                                            {/* <a href="https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/43c2/951b/7f5d/4eb4-94f1-fefd891c2801/cca79408-987a-4781-a636-e9d5fb527763_video_720p_2500kbps_audio_aaclc_128kbps.mp4">
                                            Play Video
                                        </a> */}
                                        </button>
                                        <div
                                        // className="included-with-prime"
                                        >
                                            <div
                                            // className="blue-tick-text"
                                            >
                                                <span className="blue-tick">
                                                    <img
                                                        className="blue-tick-img"
                                                        src="prime-blue-tick.png"
                                                        alt="prime-blue-tick"
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                </span>
                                                <span
                                                    className="prime-text"
                                                    style={{ color: "white" }}
                                                >
                                                    Included with Prime
                                                </span>
                                                {/* <span className="UA-container">
                                                    U/A 16+
                                                </span> */}
                                            </div>
                                            <div
                                            // className="play-btn-text"
                                            >
                                                {/* <a
                                                    href="#"
                                                    className="play-btn-link"
                                                > */}
                                                {/* <span className="home-play-btn-container">
                                                    <img
                                                        
                                                        className="home-play-btn"
                                                        src="play-btn.PNG"
                                                        alt="play button"
                                                        onClick={() =>
                                                            handleVideoURL(
                                                                videoSources[
                                                                    index
                                                                ],
                                                                titleNames[
                                                                    index
                                                                ]
                                                            )
                                                        }
                                                    />
                                                </span> */}
                                                <span className="play-text">
                                                    Play S2 E1
                                                </span>
                                                {/* </a> */}
                                                <div className="watchlist-details-container">
                                                    <button
                                                        className="watchlist-btn"
                                                        title="Watchlist"
                                                    >
                                                        <PlusOutlined
                                                            // style={{ fontSize: "30px" }}
                                                            className="home-plus-watchlist-btn"
                                                        />
                                                    </button>
                                                    <button
                                                        className="watchlist-btn"
                                                        title="Details"
                                                    >
                                                        <InfoCircleOutlined className="home-plus-watchlist-btn" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </picture>
                                </div>
                                <div
                                    // className="right-content"
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "#ffffff",
                                        zIndex: "0",
                                    }}
                                >
                                    <div key={index}>
                                        {/* <img
                                            src={thumbnailImages[index]}
                                            alt={`Thumbnail ${index}`}
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform:
                                                    "translate(-50%, -50%)",
                                                maxWidth: "100%",
                                                maxHeight: "100%",
                                            }}
                                        /> */}

                                        <video
                                            className="home-banner-video"
                                            autoPlay
                                            muted={isMuted}
                                            ref={videoRef}
                                            onEnded={handleVideoEnded}
                                        >
                                            <source
                                                src={source}
                                                type="video/mp4"
                                            />
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
                                    ;
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
