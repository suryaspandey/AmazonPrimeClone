import React from "react";
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import ContinueWatchingSlider from "./ContinueWatchingSlider";

export default function ContinueWatching() {
  return (
    <>
      <h3 style={{ color: "white" }}>Continue watching</h3>

      <div className="continue-watching-container">
        <ul className="continue-watching-ul">
          <li className="continue-wtching-li">
            <section>
              <div>
                <div className="slider-continue-watching-pic">
                  <a href="">
                    <img
                      style={{ width: "204.5px" }}
                      alt="dummy img"
                      src="https://m.media-amazon.com/images/S/pv-target-images/e57c3f2171fbe1c42459edef285a5bbc25e95b9bdabac79172f20affa8bed823._UR1920,1080_SX360_FMwebp_.jpg"
                    />
                  </a>

                  <div className="continue-watching-text-description">
                    <div className="continue-watching-slider">
                      <div className="progress-bar"> </div>
                    </div>

                    <div className="included-with-prime-header blue-tick-text">
                      <img
                        className="blue-tick-img"
                        src="/prime-blue-tick.png"
                        alt=""
                      />
                      <h5 style={{ color: "white" }}>Included with prime</h5>
                    </div>
                  </div>
                  <div className="play-btn-text">
                    <a href="#" className="play-btn-link">
                      <span className="home-play-btn-container">
                        <img
                          className="home-play-btn home-play-btn-new"
                          src="play-btn.PNG"
                          alt="play button"
                          width={265}
                        />
                      </span>
                      <span className="play-text">Resume</span>
                    </a>
                    <div className="watchlist-details-container">
                      <button
                        className="watchlist-btn continue-watching-btn"
                        title="Watchlist"
                      >
                        <PlusOutlined className="home-plus-watchlist-btn" />
                      </button>
                      <button
                        className="watchlist-btn continue-watching-btn"
                        title="Details"
                      >
                        <MoreOutlined className="home-plus-watchlist-btn" />
                      </button>
                    </div>
                  </div>
                  <h3 className="continue-watching-title">Highway Love</h3>
                  <div className="continue-watching-year-UA">
                    <h3 style={{ color: "grey" }}>2023</h3>
                    <div className="UA-num">
                      <h3>U/A 16+</h3>
                    </div>
                  </div>
                  <div className="continue-watching-description">
                    <h3 style={{ textAlign: "left" }}>
                      Season 1・When a confident and feisty girl fixes an
                      awkward but endearing guy’s
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          </li>
        </ul>
      </div>
    </>
  );
}
