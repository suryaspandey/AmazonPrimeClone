import React, { useState } from "react";
import { Tooltip } from "antd";
import { BsPlayFill } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PlayShow } from "../PlayShow/PlayShow";
// import { useEpisodeId } from "../../EpisodeNoContent";

export const Episodes_details = ({ imgdata, episodeNo, id }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    // const {setEpisodeId} = useEpisodeId(); // Get the setEpisodeId function from context

    const handleShowDetials = () => {
        navigate(`/TVShow/${id}`);
    };
    return (
        <>
            <div
                className="episodes-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="episode-img" style={{ position: "relative" }}>
                    <img src={imgdata} alt="" height={50} width={100} />

                    {isHovered && (
                        <>
                            {/* {isPlayClicked && ( */}
                            <BsPlayFill
                                className="episode-playbtn"
                                onClick={handleShowDetials}
                            />
                            {/* )} */}
                        </>
                    )}
                </div>

                <div className="episodes-download-btn-container">
                    <div className="episode-content">
                        <h1
                            style={{ color: "white" }}
                        >{`S1 E${episodeNo} - Episode ${episodeNo}`}</h1>
                        <span className="episode-date-duration">
                            <h4>September 14, 2023</h4>
                            <h4>45 min</h4>
                            <h4>A</h4>
                        </span>
                        <div
                            className="episode-details"
                            style={{ color: "white" }}
                        >
                            <h4 style={{ color: "#aaa" }}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Aut porro amet, commodi,
                                possimus voluptatum molestiae magnam debitis
                                veritatis alias molestias, repellat nulla
                                perspiciatis consectetur! Tenetur est quia quis
                                laborum tempore voluptatum dolor voluptatem
                                provident consectetur eius nostrum sit fuga iure
                                nobis, earum necessitatibus minima iste adipisci
                                in perspiciatis saepe atque.
                            </h4>
                        </div>
                        <div className="included-with-prime-img-txt">
                            <img
                                className="blue-tick-img"
                                src="/prime-blue-tick.png"
                                alt=""
                            />
                            <h5
                                style={{
                                    color: "white",
                                    margin: "8px",
                                }}
                            >
                                Included with prime
                            </h5>
                        </div>
                    </div>
                    <div className="episode-download-btn">
                        <Tooltip
                            title="Download"
                            placement="bottom"
                            arrow={false}
                        >
                            <span>
                                <GoDownload className="episode-download" />
                            </span>
                        </Tooltip>
                    </div>
                </div>
            </div>
            {/* {isPlayClicked && <PlayShow id={id} />} */}
        </>
    );
};
