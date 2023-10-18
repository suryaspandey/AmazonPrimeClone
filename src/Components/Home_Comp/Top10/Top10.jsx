import React, { useEffect, useState } from "react";
import Top10Video from "./Top10Video";
import "./top10.css";
import Top10Cards from "./Top10Cards";
import { MdOutlineTrendingUp } from "react-icons/md";

export const Top10 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 415);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      {!isMobile ? (
        <>
          <Top10Video showHeader={true} />
          <Top10Cards />
        </>
      ) : (
        <>
          <div className="cards-heaading">
            <h2
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span className="card-indv-heading">Top 10 in India</span>
              <span className="seeMore">
                <MdOutlineTrendingUp
                  className="seeMoreIcon-trending"
                  style={{
                    fontSize: "30px",
                    border: "3px solid white",
                    borderRadius: "50%",
                  }}
                />
              </span>
            </h2>
          </div>
          <Top10Cards />
        </>
      )}
    </>
  );
};
