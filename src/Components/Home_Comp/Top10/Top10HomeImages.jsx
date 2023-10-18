import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { PlusOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { MdOutlineTrendingUp } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsPlayFill } from "react-icons/bs";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import { thumbnailImages, titleNames } from "../../Home_Comp/carouselData";

const Top10HomeImages = ({ showHeader }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const projectId = "zxke0qiu2960";

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {showHeader ? (
        <div className="cards-heaading">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="card-indv-heading">Top 10 in India</span>
            <span className="seeMore">
              <MdOutlineTrendingUp
                className="seeMoreIcon-trending"
                style={{
                  fontSize: "30px",
                  border: "3px solid white",
                  borderRadius: "50%",
                }}
              />
            </span>
          </h2>
        </div>
      ) : (
        <div className="cards-heaading">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
            }}
          ></h2>
        </div>
      )}

      <div className="corousel-container">
        <Carousel
          showThumbs={false}
          interval={5000}
          selectedItem={currentIndex}
          ref={carouselRef}
          dot={true}
          autoPlay
        >
          {thumbnailImages.map((image, index) => (
            <div className="corousel-container-left-right" key={index}>
              <Link
                to={`/watchDetailsMob/64cffee700bad552e8dcd5fe`}
                state={{
                  projectId: projectId,
                }}
              >
                <div className="carousel-img-height">
                  <h2
                    className="series-name"
                    style={{ color: "white", position: "absolute", top: "30%" }}
                  >
                    {titleNames[index]}
                  </h2>
                  <div className="prime-btn-UA top10-banner-img-blue-tick">
                    <span className="blue-tick">
                      <img
                        className="blue-tick-img"
                        src="/prime-blue-tick.png"
                        alt="prime-blue-tick"
                        style={{
                          width: "15px",
                          height: "15px",
                        }}
                      />
                    </span>
                    <span
                      className="prime-text"
                      style={{
                        color: "white",
                        margin: "10px 0",
                        fontSize: "13px",
                      }}
                    >
                      Included with Prime
                    </span>
                    <span
                      className="UA-container"
                      style={{ fontSize: "13px", padding: "3px" }}
                    >
                      U/A 16+
                    </span>
                  </div>

                  <div>
                    <img
                      src={image}
                      alt={`Thumbnail ${index}`}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Top10HomeImages;
