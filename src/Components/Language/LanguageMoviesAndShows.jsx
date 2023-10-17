import React, { useEffect, useState } from "react";
import ComedyMovies from "../Home_Comp/ComedyMovies";
import SciFi from "../Home_Comp/SciFi";
import MysteryAndThriller from "../Home_Comp/MysteryAndThriller";
import { useParams } from "react-router";
import "./languageMoviesAndShows.css";
import Loader from "../Loader/Loader";

const LanguageMoviesAndShows = () => {
  const language = useParams();
  // console.log("language", language);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="language-container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="language-banner">
              <img
                className="lang-banner-img"
                src="/language-banner.PNG"
                alt="watch in your language"
              />
              <div
                className="language-text"
                // style={{ position: "absolute", top: "30%", left: "40%" }}
              >
                <h1 className="watch-in">WATCH IN</h1>
                <h1 className="watch-in">{language.language.toUpperCase()}</h1>

                <button className="lang-more-details">More Details</button>
              </div>
            </div>
            <ComedyMovies />
            <SciFi />
            <MysteryAndThriller />

            {/* {language.language === "English" ? (
              <>
                <ComedyMovies />
                <SciFi />
              </>
            ) : (
              <MysteryAndThriller />
            )} */}
          </>
        )}
      </div>
    </>
  );
};

export default LanguageMoviesAndShows;
