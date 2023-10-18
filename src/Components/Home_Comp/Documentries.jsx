import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import "./recommendedMovies.css";
import "react-multi-carousel/lib/styles.css";
import { useApi } from "../../APIContext";
import { useNavigate } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";

// const Documentries = ({ heading }) => {
const Documentries = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();
  const { setApi } = useApi();

  // console.log("heading: ", heading); // false

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "zxke0qiu2960";
  const documentaryURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"type":"documentary"}`;

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(documentaryURL, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;
        // console.log(allData);
        setMyData(exdata.data);
      });
  }, [projectId, bearerToken]);

  const handleSeeMoreClick = () => {
    setApi(documentaryURL);
    navigate("/CompleteShowList/Documentary");
  };
  return (
    <>
      {/* {!heading && ( //not to render heading in recommended section */}
      <div className="home">
        <div className="cards-heaading">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="prime-text-heading" style={{ marginRight: "8px" }}>
              Prime
            </span>

            <span className="card-indv-heading">Documentaries</span>
            <span className="seeMore" onClick={handleSeeMoreClick}>
              See More
              <MdKeyboardArrowRight
                className="seeMoreIcon"
                style={{ fontSize: "40px" }}
              />
            </span>
          </h2>
        </div>
        {/* )} */}

        <div className="carousel-main" style={{ display: "flex" }}>
          <WatchCards actualData={myData} projectId={projectId} />
        </div>
      </div>
    </>
  );
};

export default Documentries;
