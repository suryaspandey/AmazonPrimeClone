import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import "./recommendedMovies.css";
import "react-multi-carousel/lib/styles.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useApi } from "../../APIContext";
import { useNavigate } from "react-router";

const SciFi = () => {
  const [myData, setMyData] = useState([]);
  const { setApi } = useApi();
  const navigate = useNavigate();

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "zxke0qiu2960";
  const scifiURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and": [{"keywords": "sci-fi"}, {"type": "movie"}]}`;

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(scifiURL, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;
        setMyData(exdata.data);
      });
  }, [projectId, bearerToken]);

  const handleSeeMoreClick = () => {
    setApi(scifiURL);
    navigate("/CompleteShowList/Science And Fiction");
  };

  return (
    <>
      <div className="home">
        <div className="cards-heaading">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              className="prime-text-heading prime-show"
              style={{ marginRight: "8px" }}
            >
              Prime
            </span>
            <span className="card-indv-heading">
              Science and Fiction Movies
            </span>
            <span className="seeMore" onClick={handleSeeMoreClick}>
              See More
              <MdKeyboardArrowRight
                className="seeMoreIcon"
                style={{ fontSize: "40px" }}
              />
            </span>
          </h2>
        </div>
        <div className="carousel-main" style={{ display: "flex" }}>
          <WatchCards actualData={myData} projectId={projectId} />
        </div>
      </div>
    </>
  );
};

export default SciFi;
