import React, { useState } from "react";
import { useEffect } from "react";
import WatchCards from "../Home_Comp/WatchCards";

const AddToWatchList = () => {
  const [watchlistData, setWatchlistData] = useState([]);
  const [isInWatchList, setIsInWatchList] = useState(false);
  // const [loading, setLoading] = useState(true);

  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";
  const projectId = "zxke0qiu2960";
  const watchListAPI =
    "https://academics.newtonschool.co/api/v1/ott/watchlist/like";

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(watchListAPI, { method: "GET", headers: headers, redirect: "follow" })
      .then((response) => response.json())
      .then((result) => {
        setWatchlistData(result.data.shows);
        setIsInWatchList(true);
        // console.log("watchlistData: result.data.shows", result.data.shows);
      })

      .catch((error) => console.log("error", error));
  }, []);

  const handleRemoveFromWatchList = (removedItem) => {
    const updatedWatchList = watchlistData.filter(
      (item) => item._id !== removedItem
    );
    setWatchlistData(updatedWatchList);
  };
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // console.log("watchlistData from AddtoWatchList:", watchlistData);
  console.log("isInWatchList in AddToWatchList:", isInWatchList);

  return (
    <div style={{ color: "white" }}>
      {/* {watchlistData.map((item) => ( */}
      <div className="carousel-main" style={{ display: "flex" }}>
        <WatchCards
          actualData={watchlistData}
          projectId={projectId}
          handleRemoveFromWatchList={handleRemoveFromWatchList}
          isInWatchListItem={isInWatchList}
        />
        {/* ))} */}
      </div>
    </div>
  );
};

export default AddToWatchList;
