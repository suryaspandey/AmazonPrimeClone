import React from "react";
import { useEffect } from "react";
import WatchCards from "../Home_Comp/WatchCards";

const AddToWatchList = ({ watchlist }) => {
  // const [watchlistData, setWatchlistData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const bearerToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";
  // const projectId = "zxke0qiu2960";
  // const watchListAPI =
  //   "https://academics.newtonschool.co/api/v1/ott/watchlist/like";

  // useEffect(() => {
  //   const headers = {
  //     projectId: projectId,
  //     Authorization: `Bearer ${bearerToken}`,
  //   };

  //   fetch(watchListAPI, { method: "GET", headers: headers })
  //     .then((response) => response.json())
  //     .then((exdata) => {
  //       const data = exdata;
  //       console.log(data);
  //       setWatchlistData(data);
  //       setLoading(false);
  //     });
  // }, []);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div style={{ color: "white" }}>
      {watchlist.map((item) => (
        <WatchCards key={item} actualData={[{ _id: item }]} projectId={item} />
      ))}
    </div>
  );
};

export default AddToWatchList;
