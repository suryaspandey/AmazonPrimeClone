import React, { useState } from "react";
import { useNavigate } from "react-router";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import { BsPlayFill } from "react-icons/bs";
import "./mobile_Episodes_details.css";

const Mobile_Episodes_details = ({ imgdata, id }) => {
  const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae necessitatibus adipisci perferendis, atque possimus nemo aut harum fugit architecto.`;

  const getItems = (panelStyle) => [
    {
      key: "1",
      label: (
        <div
          className="mob-ep-accordian-label"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <BsPlayFill
            className="episode-playbtn1"
            onClick={handleShowDetials}
          />
          <p className="mob-episode-header">S1 E1</p>
          <p className="mob-episode-header">Episode 1</p>
        </div>
      ),
      children: [
        <div>
          <div className="episodes-play-btn1"></div>
          <div className="episodes-img-container1">
            <img
              className="mob-episode-img"
              src={imgdata}
              alt="episode1 img"
              onClick={handleShowDetials}
            />
            <div
              className="mob-episode-text-container"
              style={{ marginLeft: "5px" }}
            >
              <p style={{ color: "white" }}>{`S1 E${1} - Episode ${1}`}</p>
              <span className="episode-date-duration1">
                <p>September 14, 2023</p>
                <p>45 min</p>
                <p>A</p>
              </span>
            </div>
          </div>
          <p style={{ fontSize: "12px", color: "white" }}>{text}</p>
        </div>,
      ],
      style: panelStyle,
    },
    {
      key: "2",
      label: (
        <div
          className="mob-ep-accordian-label"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {/* <BsPlayFill
            className="episode-playbtn1"
            onClick={handleShowDetials}
          /> */}
          <p className="mob-episode-header">S1 E2</p>
          <p className="mob-episode-header">Episode 2</p>
        </div>
      ),
      children: [
        <div>
          <div className="episodes-play-btn1"></div>
          <div className="episodes-img-container1">
            <img
              className="mob-episode-img"
              src={imgdata}
              alt="episode1 img"
              onClick={handleShowDetials}
            />
            <div
              className="mob-episode-text-container"
              style={{ marginLeft: "5px" }}
            >
              <p style={{ color: "white" }}>{`S1 E${2} - Episode ${2}`}</p>
              <span className="episode-date-duration1">
                <p>September 24, 2023</p>
                <p>45 min</p>
                <p>A</p>
              </span>
            </div>
          </div>
          <p style={{ fontSize: "12px", color: "white" }}>{text}</p>
        </div>,
      ],
      style: panelStyle,
    },
  ];
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleShowDetials = () => {
    navigate(`/TVShow/${id}`);
  };

  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 10,
    background: "#353232",
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <>
      <div className="mobile_series_container">
        <Collapse
          bordered={false}
          //   defaultActiveKey={["1"]}
          //   expandIcon={({ isActive }) => (
          //     <CaretRightOutlined rotate={isActive ? 90 : 0} />
          //   )}
          style={{
            background: "#191e25",
          }}
          items={getItems(panelStyle)}
        />
      </div>
    </>
  );
};

export default Mobile_Episodes_details;
