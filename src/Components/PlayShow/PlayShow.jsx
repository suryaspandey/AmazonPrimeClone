import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./playShow.css";
import ReactPlayer from "react-player";
import { Player, ControlBar, BigPlayButton } from "video-react";
import { RiForward10Fill, RiReplay10Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { BsPauseFill } from "react-icons/bs";
// GrForwardTen
import "./playShow.css";
export const PlayShow = () => {
    let { id } = useParams();
    const [details, setDetails] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

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

    if (!details) {
        return <div>Loading...</div>; // Show a loading message while data is being fetched
    }

    return (
        <div style={{ color: "white" }}>
            {/* <h1>{details.data.title}</h1>
            <h2>{details.data.video_url}</h2> */}
            <div className="video-container">
                {/* <h2>{details.data.video_url}</h2> */}

                <video
                    controls
                    className="playShowVideoURL"
                    src={details.data.video_url}
                    height={750}
                    width={500}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                ></video>
                {isHovered && (
                    <>
                        <RiForward10Fill className="play-control-btns forward" />
                        <FaPlay className="play-control-btns play" />
                        <BsPauseFill className="play-control-btns pause" />
                        <RiReplay10Fill className="play-control-btns backward" />
                    </>
                )}
            </div>
        </div>
    );

    <div className="video-container">
        <ReactPlayer
            url={details.data.video_url} // Replace with your video URL
            controls={true}
            width="100%"
            height="100%"
        />
    </div>;
};
