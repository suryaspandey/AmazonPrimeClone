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

const AllTVShows = () => {
  return (
    <>
      <div className="card-indv-heading-main">TV Shows</div>
      <Top10Video showHeader={false} />
      <ActionAdventureTV />
      <FantasyTVShow />
      <ComedyTVShows />
      <DramaTVShow />
      <Top10 />
      <ScienceFictionTVShows />
      <RomanceTVShows />
    </>
  );
};

export default AllTVShows;
