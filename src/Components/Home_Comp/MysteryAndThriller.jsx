import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import "./recommendedMovies.css";
import "react-multi-carousel/lib/styles.css";
import { useApi } from "../../APIContext";
import { useNavigate } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";

const MysteryAndThriller = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();
  const { setApi } = useApi();

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "zxke0qiu2960";
  const mysteryURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and": [{"keywords": "mystery"}, {"keywords": "thriller"}, {"type": "movie"}]}`;

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(mysteryURL, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;
        setMyData(exdata.data);
      });
  }, [projectId, bearerToken]);

  const handleSeeMoreClick = () => {
    setApi(mysteryURL);
    navigate("/CompleteShowList/Mystery And Thriller");
  };

  return (
    <>
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

          <span className="card-indv-heading">Mystery and Thriller Movies</span>
          <span className="seeMore" onClick={handleSeeMoreClick}>
            See More
            <MdKeyboardArrowRight
              className="seeMoreIcon"
              style={{ fontSize: "40px" }}
            />
          </span>
        </h2>
      </div>

      <div className="carousel-main">
        <div>
          <WatchCards actualData={myData} projectId={projectId} />
        </div>
      </div>
    </>
  );
};

export default MysteryAndThriller;
