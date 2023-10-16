import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./watchInLanguage.css";

const WatchInLanguage = () => {
  return (
    <>
      <div className="cards-heaading">
        <h2
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="prime-text-heading" style={{ marginRight: "8px" }}>
            Prime
          </span>

          <span className="card-indv-heading">Watch in Your Language</span>
        </h2>
      </div>
      <div className="carousel-main1">
        <div className="continue-watching-container1centre">
          <ul
            className="continue-watching-ul"
            style={{ display: "flex", gap: "10px" }}
          >
            <li className="continue-wtching-li">
              <div
              // className="slider-continue-watching-pic"
              >
                <div
                  className="lang-banner-imgs"
                  style={{ height: "150px", width: "250px" }}
                  // className="banner-imgs"
                >
                  <Link to={`/WatchInYourLanguage/English`}>
                    <img
                      className="banner-img"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      src="/WatchInEng.PNG"
                      // alt={jawSummary.title}
                    />
                  </Link>
                </div>
              </div>
            </li>

            <li className="continue-wtching-li">
              <div
              // className="slider-continue-watching-pic"
              >
                <div
                  style={{ height: "150px", width: "250px" }}
                  // className="banner-imgs"
                >
                  <Link to={`/WatchInYourLanguage/Hindi`}>
                    <img
                      className="banner-img"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      src="/WatchInHindi.PNG"
                      // alt={jawSummary.title}
                    />
                  </Link>
                </div>
              </div>
            </li>
            <li className="continue-wtching-li">
              <div
              // className="slider-continue-watching-pic"
              >
                <div
                  style={{ height: "150px", width: "250px" }}
                  // className="banner-imgs"
                >
                  <Link to={`/WatchInYourLanguage/Kannada`}>
                    <img
                      className="banner-img"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      src="/WatchInKannada.PNG"
                      // alt={jawSummary.title}
                    />
                  </Link>
                </div>
              </div>
            </li>
            <li className="continue-wtching-li">
              <div
              // className="slider-continue-watching-pic"
              >
                <div
                  style={{ height: "150px", width: "250px" }}
                  // className="banner-imgs"
                >
                  <Link to={`/WatchInYourLanguage/Bengali`}>
                    <img
                      className="banner-img"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      src="/WatchInBengali.PNG"
                      // alt={jawSummary.title}
                    />
                  </Link>
                </div>
              </div>
            </li>

            <li className="continue-wtching-li">
              <div
              // className="slider-continue-watching-pic"
              >
                <div
                  style={{ height: "150px", width: "250px" }}
                  // className="banner-imgs"
                >
                  <Link to={`/WatchInYourLanguage/Marathi`}>
                    <img
                      className="banner-img"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      src="/WatchInMarathi.PNG"
                      // alt={jawSummary.title}
                    />
                  </Link>
                </div>
              </div>
            </li>

            <li className="continue-wtching-li">
              <div
              // className="slider-continue-watching-pic"
              >
                <div
                  style={{ height: "150px", width: "250px" }}
                  // className="banner-imgs"
                >
                  <Link to={`/WatchInYourLanguage/Telugu`}>
                    <img
                      className="banner-img"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      src="/WatchInTelugu.PNG"
                      // alt={jawSummary.title}
                    />
                  </Link>
                </div>
              </div>
            </li>

            <li className="continue-wtching-li">
              <div
              // className="slider-continue-watching-pic"
              >
                <div
                  style={{ height: "150px", width: "250px" }}
                  // className="banner-imgs"
                >
                  <Link to={`/WatchInYourLanguage/Punjabi`}>
                    <img
                      className="banner-img"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      src="/WatchInPunjabi.PNG"
                      // alt={jawSummary.title}
                    />
                  </Link>
                </div>
              </div>
            </li>
            <li className="continue-wtching-li">
              <div
              // className="slider-continue-watching-pic"
              >
                <div
                  style={{ height: "150px", width: "250px" }}
                  // className="banner-imgs"
                >
                  <Link to={`/WatchInYourLanguage/Gujarati`}>
                    <img
                      className="banner-img"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      src="/WatchInGujarati.PNG"
                      // alt={jawSummary.title}
                    />
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WatchInLanguage;
