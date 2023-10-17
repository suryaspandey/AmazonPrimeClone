import React from "react";
import { LiaHomeSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

const MobileSubNavbar = () => {
  const location = useLocation();

  const noShow = location.pathname.includes("watchDetailsMob");
  return (
    <>
      {!noShow && (
        <>
          <div className="mobile-tv-movie-home">
            <div className="mob-home-header">
              <Link to={"/"}>
                <LiaHomeSolid style={{ color: "white" }} />
              </Link>
            </div>
            <div className="mob-movies-header">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={"/Home/AllMovies"}
              >
                Movies
              </Link>
            </div>
            <div className="mob-tv-header">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={"/Home/AllTVShows"}
              >
                TV Shows
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileSubNavbar;
