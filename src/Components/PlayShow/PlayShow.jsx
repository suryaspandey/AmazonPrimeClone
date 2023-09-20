import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./playShow.css";
import ReactPlayer from "react-player";
import { Player, ControlBar, BigPlayButton } from "video-react";
import { RiForward10Fill, RiReplay10Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { BsPauseFill } from "react-icons/bs";
import { Slider } from "antd";

import videojs from "video.js";
import "video.js/dist/video-js.css";
// import Slider from "antd/lib/slider";
// import "antd/dist/antd.css";

// GrForwardTen
import "./playShow.css";

export const PlayShow = () => {
    let { id } = useParams();
    const [details, setDetails] = useState(null);

    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    // const [videoState, setVideoState] = useState({
    //     playing: true,
    //     muted: false,
    //     volume: 0.5,
    //     played: 0,
    //     seeking: false,
    //     Buffer: true,
    // });

    // const { playing, muted, volume, playbackRate, played, seeking, buffer } =
    //     videoState;
    // const playPauseHandler = () => {
    //     setVideoState({ ...videoState, playing: !videoState.playing });
    // };

    const handlePlayPause = () => {
        const video = document.querySelector(".playShowVideoURL");
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSliderChange = (value) => {
        const video = document.querySelector(".playShowVideoURL");
        if (video) {
            const newTime = (value / 100) * video.duration;
            video.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://academics.newtonschool.co/api/v1/ott/show/${id}`,

                    {
                        headers: {
                            projectId: "zxke0qiu2960",
                        },
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setDetails(data);
                } else {
                    console.log("Failed to fetch data:", response.statusText);
                }
            } catch (err) {
                console.log("Failed to fetch data:", response.statusText);
            }
            // finally {
            // }
        };
        fetchData();
    }, [id]);

    const [duration, setDuration] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener("loadedmetadata", () => {
                setDuration(video.duration);
            });
        }
    }, []);

    const handleforward10 = () => {
        const video = document.querySelector(".playShowVideoURL");
        if (video) {
            video.currentTime += 10; // Skip forward by 10 seconds
        }
    };

    const handlerewind10 = () => {
        const video = document.querySelector(".playShowVideoURL");
        if (video) {
            video.currentTime -= 10; // Skip forward by 10 seconds
        }
    };

    if (!details) {
        return <div>Loading...</div>; // Show a loading message while data is being fetched
    }

    return (
        <div style={{ color: "white" }}>
            <div className="video-container">
                <video
                    // controls
                    ref={videoRef}
                    className="playShowVideoURL"
                    src={details.data.video_url}
                    height={750}
                    width={500}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                ></video>
                {isHovered && (
                    <>
                        <RiForward10Fill
                            className="play-control-btns forward"
                            onClick={handleforward10}
                        />
                        <div
                            className="play_pause_container"
                            // onClick={playPauseHandler}
                        >
                            {isPlaying ? (
                                <BsPauseFill
                                    className="play-control-btns pause"
                                    onClick={handlePlayPause}
                                />
                            ) : (
                                <FaPlay
                                    className="play-control-btns play"
                                    onClick={handlePlayPause}
                                />
                            )}
                        </div>

                        <RiReplay10Fill
                            className="play-control-btns backward"
                            onClick={handlerewind10}
                        />
                    </>
                )}
                <Slider
                    value={(currentTime / duration) * 100}
                    onChange={handleSliderChange}
                    tooltip={{
                        formatter: null,
                    }}
                />
                <div>
                    <h1 style={{ color: "white" }}>Hello</h1>
                </div>
            </div>
        </div>
    );
};
