import ActionAdventureTV from "../Home_Comp/ActionAdventure/ActionAdventureTV";
import React, { createRef, useEffect, useRef, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Top10Video from "../Home_Comp/Top10/Top10Video";
import FantasyTVShow from "./FantasyTVShow";

const AllTVShows = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>All TV Shows</h1>
      <Top10Video showHeader={false} />
      <ActionAdventureTV />
      <FantasyTVShow />
    </>
  );
};

export default AllTVShows;
