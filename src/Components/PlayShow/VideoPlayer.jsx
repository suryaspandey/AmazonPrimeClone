import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import {
    FaPlay,
    FaPause,
    FaForward,
    FaBackward,
    FaVolumeUp,
    FaVolumeMute,
    FaExpand,
} from "react-icons/fa";
import { RiForward10Fill, RiReplay10Fill } from "react-icons/ri";
import { AiOutlineExpandAlt, AiOutlineClose } from "react-icons/ai";

import "./VideoPlayer.css";
import { useNavigate, useParams } from "react-router";

export const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [played, setPlayed] = useState(0);
    const playerRef = useRef(null);
    let { id } = useParams();
    const [details, setDetails] = useState(null);
    const navigate = useNavigate();

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
                    console.log(data); // getting data
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

    if (!details) {
        return <div>Loading...</div>; // Show a loading message while data is being fetched
    }

    const handlePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const handleMute = () => {
        setMuted((prev) => !prev);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    const handleSeekChange = (e) => {
        setPlayed(parseFloat(e.target.value));
        playerRef.current.seekTo(parseFloat(e.target.value));
    };

    const handleProgress = (state) => {
        if (!isPlaying) return;
        setPlayed(state.played);
    };
    const handleFullscreen = () => {
        const playerContainer = document.querySelector(
            ".video-player-container"
        );
        if (playerContainer.requestFullscreen) {
            playerContainer.requestFullscreen();
        }
    };

    const handleClose = () => {
        navigate(-1);
    };

    const handleFastForward = () => {
        const currentTime = playerRef.current.getCurrentTime();
        playerRef.current.seekTo(currentTime + 10);
    };

    const handleRewind = () => {
        const currentTime = playerRef.current.getCurrentTime();
        playerRef.current.seekTo(currentTime - 10);
    };

    return (
        <div className="video-player-container">
            {/* {console.log(details.data.video_url)} */}
            <ReactPlayer
                ref={playerRef}
                url={details.data.video_url}
                controls={false}
                playing={isPlaying}
                muted={muted}
                volume={volume}
                onProgress={handleProgress}
                width="100%"
                height="100%"
            />

            <div className="top-video-btns">
                <div className="top-three-btns-container">
                    <button
                        onClick={handleMute}
                        className="middle-class-btns volume-btn-control"
                    >
                        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>

                    <button
                        onClick={handleFullscreen}
                        className="middle-class-btns"
                    >
                        <AiOutlineExpandAlt />
                    </button>
                    <button className="middle-class-btns" onClick={handleClose}>
                        <AiOutlineClose />
                    </button>
                </div>

                <div className="volume-container" style={{ marginTop: "44px" }}>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step="any"
                        value={volume}
                        onChange={handleVolumeChange}
                        style={{
                            transform: "rotate(270deg)",
                            marginLeft: "-50px",
                            background: "grey",
                        }}
                    />
                </div>
            </div>

            <div className="middle-video-btns">
                <button
                    className="middle-class-btns"
                    onClick={() =>
                        playerRef.current.seekTo(
                            playerRef.current.getCurrentTime() - 10
                        )
                    }
                >
                    <RiReplay10Fill />
                </button>
                <button className="middle-class-btns" onClick={handlePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button
                    className="middle-class-btns"
                    onClick={() =>
                        playerRef.current.seekTo(
                            playerRef.current.getCurrentTime() + 10
                        )
                    }
                >
                    <RiForward10Fill />
                </button>
            </div>
            <div className="video-controls">
                {/* seek bar */}
                <input
                    className="video-seek-bar"
                    type="range"
                    min={0}
                    max={1}
                    step="any"
                    value={played}
                    onChange={handleSeekChange}
                />
            </div>
        </div>
    );
};
