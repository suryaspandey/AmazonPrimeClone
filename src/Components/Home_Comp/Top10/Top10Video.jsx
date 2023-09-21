import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    LeftOutlined,
    RightOutlined,
    PlusOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";
import { Top10Cards } from "./Top10Cards";

const Top10Video = () => {
    const videoRef = useRef([]);
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const videoSources = [
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/43c2/951b/7f5d/4eb4-94f1-fefd891c2801/cca79408-987a-4781-a636-e9d5fb527763_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/3a55/c17e/8089/4fb8-a021-92315081fe75/aa8e49f3-a93f-4252-bdf2-0ead29b38523_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/5918/855e/9aa4/40b7-9218-6e8c39ec294c/7854fc8c-a7bb-4b8b-b318-f396ee4cfa79_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/afa3/0022/b418/49b7-bc67-bef7672b4c6a/bd0e3070-720c-443d-a2a7-d4888d719330_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
        // "",
    ];
    const thumbnailImages = [
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WheelOfTime_S2_NewEpisodeFridays/96a4efdc-aa46-4850-bba7-2346af384a2c._UR3840,1440_SX1440_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Neeyat/f5548907-54c5-4eb8-9442-c1b53c0165a5._UR3840,1440_SX1440_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_SPIDERMAN_ATSV_99/1bcfcb5b-6ae2-43c2-b099-a8446ea76236._UR3840,1440_SX1440_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_APDhillon_S1/54fce2b2-b57a-4f85-a0b7-0cc2758d7e4a._UR3840,1440_SX1440_FMwebp_.jpeg",
        // "",
        // Add other thumbnail URLs as needed
    ];

    const handleVideoEnded = () => {
        if (currentIndex < videoSources.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
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
            <div
                className="top10-text"
                style={{ color: "white", fontSize: "50px" }}
            >
                TOP 10
            </div>
            <div className="corousel-container">
                <Carousel
                    showThumbs={false}
                    autoplay
                    infiniteLoop
                    interval={5000}
                    selectedItem={currentIndex}
                    // onChange={handleSlideChange}
                    // autoPlaySpeed={autoplaySpeed}
                    ref={carouselRef}
                    dot={false}
                    // arrows
                    // nextArrow={<RightOutlined />}
                    // prevArrow={<LeftOutlined />}
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
                                        <img
                                            className="series-name"
                                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WheelOfTime_S2/8bc35ebc-7543-4156-b218-f20a535d9f91._AC_SX1500_FMwebp_.png"
                                            alt=""
                                        />
                                        <div
                                            className="included-with-prime"
                                            // style={{ zIndex: "2" }}
                                        >
                                            <div className="blue-tick-text">
                                                <span className="blue-tick">
                                                    <img
                                                        className="blue-tick-img"
                                                        src="prime-blue-tick.png"
                                                        alt="prime-blue-tick"
                                                    />
                                                </span>
                                                <span className="prime-text">
                                                    Included with Prime
                                                </span>
                                                <span className="UA-container">
                                                    U/A 16+
                                                </span>
                                            </div>
                                            <div className="play-btn-text">
                                                <a
                                                    href="#"
                                                    className="play-btn-link"
                                                >
                                                    <span className="home-play-btn-container">
                                                        <img
                                                            className="home-play-btn"
                                                            src="play-btn.PNG"
                                                            alt="play button"
                                                        />
                                                    </span>
                                                    <span className="play-text">
                                                        Play S2 E1
                                                    </span>
                                                </a>
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
                                            muted
                                            // ref={(video) =>
                                            //     (videoRef.current[index] =
                                            //         video)
                                            // }
                                            ref={videoRef}
                                            onEnded={handleVideoEnded}
                                        >
                                            <source
                                                src={source}
                                                type="video/mp4"
                                            />
                                        </video>
                                    </div>
                                    ;
                                </div>
                            </div>
                        </>
                    ))}
                </Carousel>
            </div>
            <Top10Cards />
        </>
    );
};

export default Top10Video;
