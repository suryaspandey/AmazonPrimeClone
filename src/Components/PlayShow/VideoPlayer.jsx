import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { RiForward10Fill, RiReplay10Fill } from "react-icons/ri";
import {
  AiOutlineExpandAlt,
  AiOutlineClose,
  AiOutlineShrink,
} from "react-icons/ai";

import "./videoPlayer.css";
import { useNavigate, useParams } from "react-router";
import Loader from "../Loader/Loader";

export const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);
  let { id } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const [volumeMouseHover, setvolumeMouseHover] = useState(false);
  const dummy_id = localStorage.getItem("id");

  useEffect(() => {
    const fetchData = async () => {
      if (id !== "1234") {
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

            setDetails(data);
          } else {
            console.log("Failed to fetch data:", response.statusText);
          }
        } catch (err) {
          console.log("Failed to fetch data:", response.statusText);
        }
        // finally {
        // }
      } else {
        id = dummy_id;
        navigate(`/TVShow/${id}`);
        const title = localStorage.getItem("title");
        const videoURL = localStorage.getItem("videoURL");

        if (videoURL && title) {
          setDetails({
            data: {
              video_url: videoURL,
              title: title,
            },
          });
        }
      }
    };
    fetchData();
  }, [id]);

  if (!details) {
    return <Loader />;
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
    setCurrentTime(state.playedSeconds);
  };
  const handleFullscreen = () => {
    const playerContainer = document.querySelector(".video-player-container");
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen(false);
    } else {
      playerContainer.requestFullscreen();
      setFullScreen(true);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleDuration = (duration) => {
    setTotalDuration(duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  let timer;
  const handleMouseMove = () => {
    setShowControls(true);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setShowControls(false);
    }, 8000);
  };

  return (
    <div className="video-player-container" onMouseMove={handleMouseMove}>
      <ReactPlayer
        className="video-player"
        ref={playerRef}
        url={details?.data.video_url || videoURL}
        controls={false}
        playing={isPlaying}
        muted={muted}
        volume={volume}
        onProgress={handleProgress}
        width="100%"
        height="100%"
        onDuration={handleDuration}
        onEnded={handleEnded}
      />
      <div className="controls-container">
        {showControls && (
          <>
            <div className="show-title-on-video">
              <h2 style={{ color: "white" }}>{details.data?.title || title}</h2>
            </div>
            <div className="top-video-btns">
              <div className="top-three-btns-container">
                <button
                  onClick={handleMute}
                  className="middle-class-btns volume-btn-control"
                  onMouseEnter={() => setvolumeMouseHover(true)}
                  onMouseLeave={() => setvolumeMouseHover(false)}
                >
                  {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                  {volumeMouseHover && (
                    <div
                      className="volume-container"
                      style={{ marginTop: "44px" }}
                    >
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
                  )}
                </button>

                <button
                  onClick={handleFullscreen}
                  className="middle-class-btns volume-btn-control"
                >
                  {fullScreen ? <AiOutlineShrink /> : <AiOutlineExpandAlt />}
                </button>
                <button
                  className="middle-class-btns volume-btn-control"
                  onClick={handleClose}
                >
                  <AiOutlineClose />
                </button>
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
              <div
                className="video-duration"
                style={{
                  color: "#aaa",
                  paddingLeft: "10px",
                  fontSize: "24px",
                }}
              >
                <span style={{ color: "white" }}>
                  {formatTime(currentTime)}
                </span>
                / {formatTime(totalDuration)}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
