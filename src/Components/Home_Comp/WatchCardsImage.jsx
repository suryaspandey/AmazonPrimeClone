import React, { useState } from "react";
import { Link } from "react-router-dom";
import WatchCardsVideo from "./WatchCardsVideo";
import WatchCardsDescription from "./WatchCardsDescription";

const WatchCardsImage = ({ item, projectId }) => {
  return (
    <>
      {/* <div className="slider-continue-watching-pic"> */}
      <div className="banner-imgs">
        <>
          <Link
            to={`/watchDetails/${item._id}`}
            state={{ projectId: projectId }}
          >
            <img
              // className="banner-img"
              src={item.thumbnail}
              style={{
                width: "100%",
                height: "100%",
                zIndex: 10,
                borderRadius: "0.2rem",
              }}
            />
          </Link>
        </>
      </div>
      {/* </div> */}
    </>
  );
};

export default WatchCardsImage;
