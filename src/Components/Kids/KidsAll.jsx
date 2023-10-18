import React, { useEffect, useState } from "react";
import Top10Video from "../Home_Comp/Top10/Top10Video";
import KidsAndFamilyTVShows from "./KidsAndFamilyTVShows";
import KidsAndFamilyMovies from "./KidsAndFamilyMovies";
import Top10HomeImages from "../Home_Comp/Top10/Top10HomeImages";

const KidsAll = () => {
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
  }, []);

  return (
    <>
      <div className="home">
        <div className="card-indv-heading-main">Kids</div>
        {isMobile ? (
          <Top10HomeImages showHeader={false} />
        ) : (
          <Top10Video showHeader={false} />
        )}
        <KidsAndFamilyTVShows />
        <div className="last-card-slider" style={{ height: "475px" }}>
          <KidsAndFamilyMovies />
        </div>
      </div>
    </>
  );
};

export default KidsAll;
