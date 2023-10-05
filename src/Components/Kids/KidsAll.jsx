import React from "react";
import Top10Video from "../Home_Comp/Top10/Top10Video";
import KidsAndFamilyTVShows from "./KidsAndFamilyTVShows";
import KidsAndFamilyMovies from "./KidsAndFamilyMovies";

const KidsAll = () => {
  return (
    <>
      <div className="card-indv-heading-main">Kids</div>
      <Top10Video showHeader={false} />
      <KidsAndFamilyTVShows />
      <KidsAndFamilyMovies />
    </>
  );
};

export default KidsAll;
