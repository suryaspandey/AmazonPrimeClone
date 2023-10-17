import React, { useState } from "react";
import { Tooltip } from "antd";
import { BsPlayFill } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { useNavigate } from "react-router-dom";
export const Episodes_details = ({ imgdata, episodeNo, id }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleShowDetials = () => {
    navigate(`/TVShow/${id}`);
  };
  const handleDownloadClick = () => {
    navigate("/comingSoon");
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
              <BsPlayFill
                className="episode-playbtn"
                onClick={handleShowDetials}
              />
            </>
          )}
        </div>

        <div className="episodes-download-btn-container">
          <div className="episode-content">
            <h2
              style={{ color: "white", margin: "0px" }}
            >{`S1 E${episodeNo} - Episode ${episodeNo}`}</h2>
            <span className="episode-date-duration" style={{ margin: "5px" }}>
              <h3 style={{ margin: "0px" }}>September 14, 2023</h3>
              <h3 style={{ margin: "0px" }}>45 min</h3>
              <h3 style={{ margin: "0px" }}>A</h3>
            </span>
            <div className="episode-details" style={{ color: "white" }}>
              <h4 style={{ color: "#aaa" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                porro amet, commodi, possimus voluptatum molestiae magnam
                debitis veritatis alias molestias, repellat nulla perspiciatis
                consectetur! Tenetur est quia quis laborum tempore voluptatum
                dolor voluptatem provident consectetur eius nostrum sit fuga
                iure nobis, earum necessitatibus minima iste adipisci in
                perspiciatis saepe atque.
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
                  fontSize: "16px",
                }}
              >
                Included with prime
              </h5>
            </div>
          </div>
          <div className="episode-download-btn">
            <Tooltip title="Download" placement="bottom" arrow={false}>
              <span onClick={handleDownloadClick}>
                <GoDownload className="episode-download" />
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};
