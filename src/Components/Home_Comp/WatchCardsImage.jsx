import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WatchCardsImage = ({ item, projectId }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 415);
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    window.removeEventListener("resize", handleResize);
  });

  return (
    <>
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
    </>
  );
};

export default WatchCardsImage;
