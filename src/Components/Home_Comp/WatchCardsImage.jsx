import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WatchCardsVideo from "./WatchCardsVideo";
import WatchCardsDescription from "./WatchCardsDescription";

const WatchCardsImage = ({ item, projectId }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 414);
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      {/* <div className="slider-continue-watching-pic"> */}
      <div className="banner-imgs">
        <>
          <Link
            to={
              isMobile
                ? `/watchDetailsMob/${item._id}`
                : `/watchDetails/${item._id}`
            }
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
                objectFit: "cover",
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
