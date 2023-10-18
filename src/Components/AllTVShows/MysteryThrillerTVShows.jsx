import React, { useEffect, useState } from "react";
import WatchCards from "../Home_Comp/WatchCards";
// import "./recommendedMovies.css";
import "react-multi-carousel/lib/styles.css";
import { useApi } from "../../APIContext";
import { useNavigate } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";

const MysteryThrillerTVShows = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();
  const { setApi } = useApi();

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "zxke0qiu2960";
  const mysteryTV = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and": [{"keywords": "mystery"}, {"keywords": "thriller"},{"type": "tv show"}]}`;

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(mysteryTV, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;
        setMyData(exdata.data);
      });
  }, [projectId, bearerToken]);

  const handleSeeMoreClick = () => {
    setApi(mysteryTV);
    navigate("/CompleteShowList/MysteryThriller TV Show");
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

          <span className="card-indv-heading">
            Mystery and Thriller TV Shows
          </span>
          <span
            className="seeMore"
            onClick={handleSeeMoreClick}
            style={{ cursor: "pointer" }}
          >
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
    </>
  );
};

export default MysteryThrillerTVShows;
