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

import "./VideoPlayer.css";
import { useParams } from "react-router";

export const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [played, setPlayed] = useState(0);
    const playerRef = useRef(null);
    let { id } = useParams();
    const [details, setDetails] = useState(null);

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
                // url="https://www.youtube.com/watch?v=uMQnn8xU7qs"
                // url="https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd507.mp4"
                controls={false}
                playing={isPlaying}
                muted={muted}
                volume={volume}
                onProgress={handleProgress}
                width="100%"
                height="100%"
            />

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

                <button onClick={handleMute}>
                    {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step="any"
                    value={volume}
                    onChange={handleVolumeChange}
                />

                <button onClick={handleFullscreen}>
                    <FaExpand />
                </button>

                {/* <button onClick={handleRewind}>
                    <FaBackward />
                </button>
                <button onClick={handleFastForward}>
                    <FaForward />
                </button> */}
            </div>
        </div>
    );
};

// export default VideoPlayer;
