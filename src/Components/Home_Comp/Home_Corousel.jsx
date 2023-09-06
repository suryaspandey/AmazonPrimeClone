import React from "react";
import { Carousel } from "antd";
import {
    LeftOutlined,
    RightOutlined,
    PlusOutlined,
    InfoCircleOutlined,
    // ArrowLeftOutlined,
    // ArrowRightOutlined,
} from "@ant-design/icons";

const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};
export default function Home_Corousel() {
    return (
        <>
            <div className="corousel-container">
                <Carousel
                    autoplay
                    autoPlaySpeed={550000}
                    arrows
                    nextArrow={<RightOutlined />}
                    prevArrow={<LeftOutlined />}
                >
                    <div className="corousel-container-left-right">
                        <div className="left-content">
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
                                <div className="included-with-prime">
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
                                        <a href="#" className="play-btn-link">
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
                        <div className="right-content">
                            <a href="">
                                <video autoPlay muted>
                                    <source
                                        src="https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/43c2/951b/7f5d/4eb4-94f1-fefd891c2801/cca79408-987a-4781-a636-e9d5fb527763_video_720p_2500kbps_audio_aaclc_128kbps.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </a>
                        </div>
                        {/* <h3 style={contentStyle}>1</h3> */}
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
        </>
    );
}
