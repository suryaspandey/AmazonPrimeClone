import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import "./recommendedMovies.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useApi } from "../../APIContext";
import { useNavigate } from "react-router";
// import { Carousel } from "react-responsive-carousel";

const SciFi = () => {
  const [myData, setMyData] = useState([]);
  const { setApi } = useApi();
  const navigate = useNavigate();

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "zxke0qiu2960";
  const scifiURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and": [{"keywords": "sci-fi"}, {"type": "movie"}]}`;

  useEffect(() => {
    // const scifiURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"keywords" : "sci-fi"}`;

    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(scifiURL, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;
        // console.log(allData);
        setMyData(exdata.data);
      });
  }, [projectId, bearerToken]);

  const handleSeeMoreClick = () => {
    setApi(scifiURL);
    navigate("/CompleteShowList/Science And Fiction");
  };

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
          <span className="card-indv-heading">Science and Fiction Movies</span>
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
    </>
  );
};

export default SciFi;
