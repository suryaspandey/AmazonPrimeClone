import React, { useEffect, useState } from "react";
import { videoSources, thumbnailImages, titleNames } from "../carouselData";

const Top10Cards = () => {
    const [myData, setMyData] = useState([]);
    const [isHighlighted, setIsHighlighted] = useState(1);

    return (
        <>
            <div className="carousel-main top10-carousel">
                <span className="card-no-img">
                    {thumbnailImages.map((item, index) => {
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
                                                            color: "red",
                                                        }}
                                                    >
                                                        {index + 1}
                                                        {setIsHighlighted(
                                                            isHighlighted + 1
                                                        )}
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

export default Top10Cards;
