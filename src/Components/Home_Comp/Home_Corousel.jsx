import React, { createRef, useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ContinueWatching from "./ContinueWatching";
import ContinueWatchingSlider from "./ContinueWatchingSlider";
import RecommendedMovies from "./RecommendedMovies";
import { ContinueWatchingSlider1 } from "./ContinueWatchingSlider1";
import MysteryAndThriller from "./MysteryAndThriller";
import SciFi from "./SciFi";
import ComedyMovies from "./ComedyMovies";
import { Top10 } from "./Top10/Top10";
import WatchInLanguage from "./Top10/WatchInLanguage";
import Documentries from "./Documentries";
import ActionAdventureMovies from "./ActionAdventure/ActionAdventureMovies";
import Top10Video from "./Top10/Top10Video";
import RomanceMovies from "./RomanceMovies";
import HorrorMovies from "./HorrorMovies";
import FantasyMovies from "./FantasyMovies";
import DramaMovies from "./DramaMovies";
import Top10HomeImages from "./Top10/Top10HomeImages";

export default function Home_Corousel() {
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
    <div className="home">
      <div className="card-indv-heading-main">Movies</div>

      {isMobile ? (
        <Top10HomeImages showHeader={false} />
      ) : (
        <Top10Video showHeader={false} />
      )}
      {/* <RecommendedMovies /> */}

      <MysteryAndThriller />
      <SciFi />
      <Top10 />
      <ComedyMovies />
      <HorrorMovies />
      <WatchInLanguage />
      <ActionAdventureMovies />
      <RomanceMovies />
      <FantasyMovies />
      <Documentries />

      <div className="last-card-slider" style={{ height: "475px" }}>
        <DramaMovies />
      </div>
    </div>
  );
}
