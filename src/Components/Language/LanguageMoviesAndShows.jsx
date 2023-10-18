import React, { useEffect, useState } from "react";
import ComedyMovies from "../Home_Comp/ComedyMovies";
import SciFi from "../Home_Comp/SciFi";
import MysteryAndThriller from "../Home_Comp/MysteryAndThriller";
import { useParams } from "react-router";
import "./languageMoviesAndShows.css";
import Loader from "../Loader/Loader";
import DramaMovies from "../Home_Comp/DramaMovies";
import Documentries from "../Home_Comp/Documentries";
import ActionAdventureMovies from "../Home_Comp/ActionAdventure/ActionAdventureMovies";
import RomanceMovies from "../Home_Comp/RomanceMovies";
import FantasyMovies from "../Home_Comp/FantasyMovies";
import HorrorMovies from "../Home_Comp/HorrorMovies";
import ComedyTVShows from "../AllTVShows/ComedyTVShows";
import ScienceFictionTVShows from "../AllTVShows/ScienceFictionTVShows";

const LanguageMoviesAndShows = () => {
  const language = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="home">
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
                <div className="language-text">
                  <h1 className="watch-in">WATCH IN</h1>
                  <h1 className="watch-in">
                    {language.language.toUpperCase()}
                  </h1>

                  <button className="lang-more-details">More Details</button>
                </div>
              </div>

              {language.language === "English" && (
                <>
                  <ComedyTVShows />
                  <ScienceFictionTVShows />
                </>
              )}
              {language.language === "Hindi" && (
                <>
                  <SciFi />
                  <HorrorMovies />
                </>
              )}
              {language.language === "Kannada" && (
                <>
                  <MysteryAndThriller />
                  <ActionAdventureMovies />
                </>
              )}
              {language.language === "Telugu" && (
                <>
                  <DramaMovies />
                  <ComedyMovies />
                </>
              )}
              {language.language === "Tamil" && (
                <>
                  <Documentries />
                  <MysteryAndThriller />
                </>
              )}
              {language.language === "Punjabi" && (
                <>
                  <ActionAdventureMovies />
                  <RomanceMovies />
                </>
              )}
              {language.language === "Bengali" && (
                <>
                  <RomanceMovies />
                  <FantasyMovies />
                </>
              )}
              {/* {language.language === "Punjabi" && (
                <>
                  <FantasyMovies />
                  <SciFi />
                </>
              )} */}
              {language.language === "Marathi" && (
                <>
                  <HorrorMovies />
                  <Documentries />
                </>
              )}
              {language.language === "Gujarati" && (
                <>
                  <FantasyMovies />
                  <ComedyMovies />
                </>
              )}
            </>
          )}
        </div>
        <div className="emptypadding" style={{ paddingTop: "180px" }}></div>
      </div>
    </>
  );
};

export default LanguageMoviesAndShows;
