import React from "react";
import "./homeMain.css";

export default function Home() {
  return (
    <>
      <div className="home-container-main">
        <img
          width="100%"
          height="100%"
          src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg"
          alt=""
        />
      </div>
      <div className="home-banner-text-container">
        <h1>Welcome to Prime Video</h1>
        <div className="banner1-text">
          <h2>
            Watch the latest movies, TV shows, and award-winning Amazon
            Originals
          </h2>
        </div>

        <div className="primeoffers-btns-container">
          <div className="primeoffersBtnandLinks">
            <button className="primeoffersbtn">
              Start your 30-day Prime free trial
            </button>
            <a className="primeoffersplanlinks" href="">
              ⓘ Plan details
            </a>
          </div>
        </div>
      </div>
      <div className="second-home-banner">
        <div className="home-container-main">
          <img
            width="100%"
            height="100%"
            src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Left.jpg"
            alt=""
          />
        </div>

        <div className="home-banner-text-container-banner2">
          <h1 style={{ color: "white" }}>Movie rentals on Prime Video</h1>
          <h2>Early Access to new movies, before digital subscription</h2>
          <div className="primeoffers-btns-container">
            <div className="primeoffersBtnandLinks-banner2">
              <button className="primeoffersbtn">Rent Now</button>
              {/* <a className="primeoffersplanlinks" href="">
                            ⓘ Plan details
                        </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // return <div>Home</div>;
}
