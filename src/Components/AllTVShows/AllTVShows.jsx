import ActionAdventureTV from "../Home_Comp/ActionAdventure/ActionAdventureTV";
import React, { createRef, useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Top10Video from "../Home_Comp/Top10/Top10Video";
import FantasyTVShow from "./FantasyTVShow";
import ComedyTVShows from "./ComedyTVShows";
import DramaTVShow from "./DramaTVShows";
import { Top10 } from "../Home_Comp/Top10/Top10";
import ScienceFictionTVShows from "./ScienceFictionTVShows";
import RomanceTVShows from "./RomanceTVShows";
import Top10HomeImages from "../Home_Comp/Top10/Top10HomeImages";

const AllTVShows = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 415);
    };
    // Initial check on component mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="home">
        <div className="card-indv-heading-main">TV Shows</div>
        {isMobile ? (
          <Top10HomeImages showHeader={false} />
        ) : (
          <Top10Video showHeader={false} />
        )}

        <ActionAdventureTV />
        <FantasyTVShow />
        <ComedyTVShows />
        <DramaTVShow />
        <Top10 />
        <ScienceFictionTVShows />
        <div className="last-card-slider" style={{ height: "475px" }}>
          <RomanceTVShows />
        </div>
      </div>
    </>
  );
};

export default AllTVShows;
