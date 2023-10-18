import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import "./recommendedMovies.css";
import "react-multi-carousel/lib/styles.css";

const RecommendedMovies = () => {
  const [myData, setMyData] = useState([]);

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "zxke0qiu2960";

  useEffect(() => {
    const webSeriesurl = `https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "web series"}&limit=20`;

    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(webSeriesurl, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;
        const randomArr = [];
        for (let i = 0; i < 20; i = i + 1) {
          const limit20 = Math.floor(Math.random() * allData.data.length);
          if (!randomArr.includes(limit20)) {
            randomArr.push(allData.data[limit20]);
          }
        }

        setMyData(randomArr);
      });
  }, [projectId, bearerToken]);

  if (myData && myData.length) {
    return (
      <>
        <div className="cards-heaading">
          <h2>
            <span className="prime-text-heading" style={{ marginRight: "8px" }}>
              Prime
            </span>
            <span className="card-indv-heading">Recommended movies</span>
          </h2>
        </div>
        <div className="carousel-main" style={{ display: "flex" }}>
          <WatchCards actualData={myData} projectId={projectId} />
        </div>
      </>
    );
  }
  return <div />;
};

export default RecommendedMovies;
