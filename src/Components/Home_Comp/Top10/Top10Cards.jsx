import React, { useEffect, useState } from "react";
import { videoSources, thumbnailImages, titleNames } from "../carouselData";
import { useNavigate } from "react-router";

const Top10Cards = () => {
  const [myData, setMyData] = useState([]);
  const [isHighlighted, setIsHighlighted] = useState(1);
  const navigate = useNavigate();

  const handleImgClick = (index) => {
    navigate(videoSources[index]);
    console.log("videoSources[index]", index);
  };

  return (
    <>
      <div className="carousel-main1 top10-carousel">
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
                    <a
                      href={`${videoSources[index]}`}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        className="card-btn-container"
                        // onClick={() => handleImgClick(index)}
                      >
                        <div className="card-no" style={{ color: "white" }}>
                          <span
                            className="no-span no-span-img"
                            style={{
                              fontSize: index === 9 ? "77px" : "100px",
                              color: "white",
                            }}
                          >
                            {index + 1}
                          </span>
                        </div>
                        <span className="card-img-div">
                          <img
                            style={{ cursor: "pointer" }}
                            className="top10-card-img"
                            src={thumbnailImages[index]}
                            alt={item.title}
                          />
                        </span>
                      </button>
                    </a>
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
