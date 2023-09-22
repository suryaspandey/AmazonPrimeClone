import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { BiVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    LeftOutlined,
    RightOutlined,
    PlusOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";
import { VideoPlayer } from "../../PlayShow/VideoPlayer";
import { useNavigate } from "react-router";
import { MdOutlineTrendingUp } from "react-icons/md";

const Top10Video = () => {
    const videoRef = useRef([]);
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [myData, setMyData] = useState([]);
    const [isHighlighted, setIsHighlighted] = useState(1);
    const navigate = useNavigate();

    const [isMuted, setIsMuted] = useState(true);

    const bearerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";
    const projectId = "zxke0qiu2960";
    const mysteryURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and": [{"keywords": "mystery"}, {"keywords": "thriller"}]}`;

    useEffect(() => {
        const url = "https://academics.newtonschool.co/api/v1/ott/show";

        const headers = {
            projectId: projectId,
            Authorization: `Bearer ${bearerToken}`,
        };

        fetch(url, { method: "GET", headers: headers })
            .then((response) => response.json())
            .then((exdata) => {
                const allData = exdata;
                // console.log(allData);
                setMyData(exdata.data);
            });
    }, [projectId, bearerToken]);

    const videoSources = [
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/43c2/951b/7f5d/4eb4-94f1-fefd891c2801/cca79408-987a-4781-a636-e9d5fb527763_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //wheelofTime
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/3a55/c17e/8089/4fb8-a021-92315081fe75/aa8e49f3-a93f-4252-bdf2-0ead29b38523_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //neeyat
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/5918/855e/9aa4/40b7-9218-6e8c39ec294c/7854fc8c-a7bb-4b8b-b318-f396ee4cfa79_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //spiderman
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/afa3/0022/b418/49b7-bc67-bef7672b4c6a/bd0e3070-720c-443d-a2a7-d4888d719330_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //APdhilon
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/3451/02b8/011b/4d63-bd7f-d06a821365ae/84f26c80-3873-496c-b9a0-c32e76133d77_video_720p_2500kbps_audio_aaclc_128kbps.mp4", // satyaprem
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/3944/c30a/b3c9/406a-a9a7-ca9d29403921/82b620ed-0bfa-4c1d-a2e5-9c76f401007d_video_720p_2500kbps_audio_aaclc_128kbps.mp4", // bambai
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/1ebe/cc73/5b04/4b89-82ed-aea3d7397818/ff212611-ef2c-4eb9-a653-f4ec33fd95cd_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //jailer
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/03f3/7a52/66ac/4581-8e69-ed46435963c7/fcfc2f09-1b21-451f-810f-cecb50d559be_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //pathaan
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/3180/836e/c53e/4798-a77b-134ef60780a9/df8ce2b7-af0c-47c5-ba49-d4e51c1a90eb_video_720p_2500kbps_audio_aaclc_128kbps.mp4", // made in heven
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/3944/c30a/b3c9/406a-a9a7-ca9d29403921/82b620ed-0bfa-4c1d-a2e5-9c76f401007d_video_720p_2500kbps_audio_aaclc_128kbps.mp4", // bambai

        // "",
    ];
    const thumbnailImages = [
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WheelOfTime_S2_NewEpisodeFridays/96a4efdc-aa46-4850-bba7-2346af384a2c._UR3840,1440_SX1440_FMwebp_.jpeg", //wheeloftime
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Neeyat/f5548907-54c5-4eb8-9442-c1b53c0165a5._UR3840,1440_SX1440_FMwebp_.jpeg", //neeyat
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_SPIDERMAN_ATSV_99/1bcfcb5b-6ae2-43c2-b099-a8446ea76236._UR3840,1440_SX1440_FMwebp_.jpeg", //spiderman
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_APDhillon_S1/54fce2b2-b57a-4f85-a0b7-0cc2758d7e4a._UR3840,1440_SX1440_FMwebp_.jpeg", //APdhilon
        "https://m.media-amazon.com/images/S/pv-target-images/65eff17a123be72dca62367706c3a29a3137d6f05b31d958b362844217d61fc2._UR1920,1080_AGaverage_SX720_FMwebp_.jpg", // satyaprem
        "https://m.media-amazon.com/images/S/pv-target-images/db5c2195f571f646cb3201103c8a75b130bdb6870d6b7c8a021ffd1f2f3be6c9._UR1920,1080_AGaverage_SX1440_FMjpg_.jpg", //bambaai
        "https://m.media-amazon.com/images/S/pv-target-images/e40e50510afe106bb1c3d0d38451db12f800c66c80432c6d9a5ce260e9b0d6e1._UR1920,1080_AGaverage_SX1440_FMjpg_.jpg", // jailer
        "https://m.media-amazon.com/images/S/pv-target-images/65ed493d49c3c69394c3348aa0c9c814ab7c2e88ba822efd9ac2afe4db17a926._UR1920,1080_AGaverage_SX1440_FMjpg_.jpg", //pathaan
        "https://m.media-amazon.com/images/S/pv-target-images/3c8e7c1467fb8b4e363fd1aaaf6ef9c8ec03aa403b00500416e30b7a77808b21._UR1920,1080_AGaverage_SX1440_FMjpg_.jpg", // made in heaven
        "https://m.media-amazon.com/images/S/pv-target-images/db5c2195f571f646cb3201103c8a75b130bdb6870d6b7c8a021ffd1f2f3be6c9._UR1920,1080_AGaverage_SX1440_FMjpg_.jpg", //bambaai

        // "",
    ];

    const titleNames = [
        "Wheel of Time",
        "Neeyat",
        "Spiderman",
        "A P Dhillon",
        "Satyaprem Ki Katha",
        "Bambaai Meri Jaan",
        "Jailer",
        "Pathaan",
        "Made In Heaven",
        "Bambaai Meri Jaan Copy",
    ];

    const handleVideoEnded = () => {
        if (currentIndex < videoSources.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
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
            <div className="carousel-main top10-carousel">
                <span className="card-no-img">
                    {myData.map((item, index) => {
                        while (index < 10) {
                            return (
                                <>
                                    <li
                                        style={{
                                            color: "black",
                                            listStyleType: "none",
                                        }}
                                    >
                                        <button className="card-btn-container">
                                            <div
                                                className="card-no"
                                                style={{ color: "white" }}
                                            >
                                                {isHighlighted ? (
                                                    <span
                                                        className="no-span no-span-img"
                                                        style={{
                                                            fontSize:
                                                                index === 9
                                                                    ? "77px"
                                                                    : "100px",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {index + 1}
                                                    </span>
                                                ) : (
                                                    <span
                                                        className="no-span no-span-img"
                                                        style={{
                                                            fontSize:
                                                                index === 9
                                                                    ? "77px"
                                                                    : "100px",
                                                            color: "#aaa",
                                                        }}
                                                    >
                                                        {index + 1}
                                                    </span>
                                                )}
                                            </div>
                                            <span className="card-img-div">
                                                <img
                                                    className="top10-card-img"
                                                    // src={item.thumbnail}
                                                    src={thumbnailImages[index]}
                                                    alt={item.title}
                                                />
                                            </span>
                                        </button>
                                    </li>
                                </>
                            );
                        }
                    })}
                </span>
            </div>
        </>
    );
};

export default Top10Video;
