import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import "./recommendedMovies.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Carousel } from "react-responsive-carousel";

const RecommendedMovies = () => {
  const [myData, setMyData] = useState([]);
  // const [randomShows, setRandomShows] = useState([]);

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "zxke0qiu2960";

  // const randomArr = [];
  // let i;
  // const genRandomNum = () => {
  //   for (i = 0; i < 20; i = i + 1) {
  //     const limit20 = Math.floor(Math.random() * 20) + 1;
  //     randomArr.push(limit20);
  //   }
  // };
  // genRandomNum();
  // console.log("genRandomNum", randomArr);

  useEffect(() => {
    const url = "https://academics.newtonschool.co/api/v1/ott/show";

    const webSeriesurl = `https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "web series"}&limit=20`;

    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(webSeriesurl, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;

        // const randomArr = [];
        // for (let i = 0; i < 20; i = i + 1) {
        //   const limit20 = Math.floor(Math.random() * allData.data.length) + 1;
        //   randomArr.push(limit20);
        // }

        // const randomShowData = randomArr.map((index) => allData.data[index]);
        // setRandomShows(randomShowData);
        // console.log("recommended component", allData.data.length);
        // console.log("randomShowData", randomShowData);
        setMyData(exdata.data);
      });
  }, [projectId, bearerToken]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // console.log("recommended movies comp");

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
};

export default RecommendedMovies;
