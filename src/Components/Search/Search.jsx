import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import WatchCards from "../Home_Comp/WatchCards";

const Search = () => {
  const { phrase } = useParams();
  console.log("search phrase:", phrase);
  const [showData, setShowData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const projectId = "zxke0qiu2960";
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";

  // const searchBarFn = () => {
  //   fetch(
  //     `https://academics.newtonschool.co/api/v1/ott/show?filter={"title" : "${phrase}"}`,
  //     {
  //       headers: {
  //         projectId: projectId,
  //         Authorization: `Bearer ${bearerToken}`,
  //       },
  //       method: "GET",
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

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
        console.log(data);
        if (data.status === "success") setShowData(data.data);
        if (data.status === "fail") setNotFound(true);
      })
      .catch((error) => console.log("error", error));
  }, [phrase]);

  return (
    <>
      <h1 style={{ color: "white", paddingTop: "100px" }}>
        Search Results for: {phrase}
      </h1>
      {notFound && <h1 style={{ color: "red" }}>No show found</h1>}
      else
      {
        <div className="carousel-main" style={{ display: "flex" }}>
          <WatchCards actualData={showData} projectId={projectId} />
        </div>
      }
    </>
  );
};

export default Search;
