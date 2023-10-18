import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import WatchCards from "../Home_Comp/WatchCards";
import ShortFilms from "../Home_Comp/ShortFilms";
import HorrorMovies from "../Home_Comp/HorrorMovies";

const Search = () => {
  const { phrase } = useParams();
  const [showData, setShowData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const projectId = "zxke0qiu2960";
  const bearerToken = localStorage.getItem("bearer_token");

  var myHeaders = new Headers();
  myHeaders.append("projectId", "zxke0qiu2960");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?filter={"$or":[{"title":"${phrase}"},{"keywords":"${phrase}"},{"type":"${phrase}"},{"description":{"$regex":"${phrase}"}}]}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        if (data.status === "success") setShowData(data.data);
        if (data.status === "fail") setNotFound(true);
      })
      .catch((error) => console.log("error", error));
  }, [phrase]);

  if (notFound) {
    return (
      <>
        <div className="home">
          <div className="searchNotFound">
            <h4
              style={{
                color: "white",
                padding: "100px 0 0 40px",
                fontSize: "18px",
              }}
            >
              Results for: {phrase}.
            </h4>
            <h1
              style={{
                color: "white",
                fontSize: "18px",
                padding: "10px 0 0 40px",
              }}
            >
              We didn't find any matches for "{phrase}". Browse our most popular
              TV shows and movies.
            </h1>
            <ShortFilms />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1
        style={{ color: "white", padding: "100px 0 0 40px", fontSize: "18px" }}
      >
        Results for: {phrase}.
      </h1>

      <>
        <h4 style={{ fontSize: "18px" }}>More videos</h4>
        <div className="carousel-main" style={{ display: "flex" }}>
          <WatchCards actualData={showData} projectId={projectId} />
        </div>
      </>
    </>
  );
};

export default Search;
