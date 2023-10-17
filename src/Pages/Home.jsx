import React, { useEffect, useState } from "react";
import "./homeMain.css";
import { useNavigate } from "react-router";
import { Button, Modal } from "antd";
import UserMoodsModal from "../Components/UserMoodsModel/UserMoodsModal";

export default function Home() {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const [modal1Open, setModal1Open] = useState(false);

  const isAuthenticated = !!localStorage.getItem("bearer_token"); // will return truthy value

  const handleComingSoon = () => {
    navigate("/comingSoon");
  };

  const handleLoginPage = () => {
    navigate("/login");
  };

  useEffect(() => {
    setTimeout(() => {
      <UserMoodsModal />;
    }, 3000);
  }, []);

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
            {isAuthenticated ? (
              <button className="primeoffersbtn" onClick={handleComingSoon}>
                Start your 30-day Prime free trial
              </button>
            ) : (
              <button className="primeoffersbtn" onClick={handleLoginPage}>
                Login to Prime Video Clone
              </button>
            )}

            <Button
              type="primary"
              onClick={() => setModal1Open(true)}
              className="primeoffersplanlinks"
              style={{
                background: "transparent",
                border: "none",
                padding: "0px",
                margin: "0px",
              }}
            >
              ⓘ Plan details
            </Button>
            <Modal
              title="Enjoy all Prime benefits"
              style={{
                top: 20,
              }}
              open={modal1Open}
              onOk={() => setModal1Open(false)}
              // onCancel={() => setModal1Open(false)}
            >
              <p>
                Watch Prime Video on multiple devices in 4K UHD (2160p) quality
                (ad-free)
              </p>

              <p>
                Get unlimited FREE Same-Day/One-Day free delivery on Amazon
                purchases
              </p>
              <p>Enjoy ad-free music on Prime Music and many more benefits</p>
            </Modal>
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
              <button
                className="primeoffersbtn"
                style={{ cursor: "pointer" }}
                onClick={handleComingSoon}
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-channels-container">
        <div className="channels-text">
          <h1>Your favorite channels all in one place</h1>
          <p>
            With Prime Video Channels, find shows and movies from your favorite
            channels all in one place. Enjoy with an add-on subscription to
            Channels of your choice
          </p>
        </div>
        <div className="channels-list-container">
          <div className="channels-grid">
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_BBC_PLAYER.png"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Chaupal.png"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Amc.png"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg"
                alt=""
              />
            </div>
            <div className="channel" onClick={() => alert("Coming Soon!")}>
              <img
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-container-main firestick-container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._SX1440_CR0,0,865,675_QL80_AC_FP_.jpg"
          alt="firestick img"
        />
        <div className="firestick-text">
          <h1>Even better with Fire TV Stick</h1>
          <p style={{ fontSize: "22px" }}>
            The biggest movies and TV shows are always better on a big screen.
            Simply plug in your Amazon Fire TV Stick and stream on any HDTV.
            Press the voice button on the remote and say the name of the title
            you want to watch to find it in seconds.
          </p>
          <div className="primeoffers-btns-container">
            <div className="primeoffersBtnandLinks">
              <button
                className="primeoffersbtn"
                onClick={handleComingSoon}
                style={{ cursor: "pointer" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="home-container-main firestick-container family-home-container">
        <img
          className="family-banner-img"
          width="100%"
          height="100%"
          src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._CB1517304519_.jpg"
          alt=""
        />
        <div className="firestick-text family-friendly">
          <h1>Family Friendly</h1>
          <p style={{ fontSize: "22px" }}>
            With easy to use Parental Controls and a dedicated kids page, enjoy
            secure, ad-free kids entertainment. Kids can enjoy popular TV shows
            like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
          </p>
          <div className="primeoffers-btns-container">
            <div className="primeoffersBtnandLinks">
              <button
                className="primeoffersbtn"
                onClick={handleComingSoon}
                style={{ cursor: "pointer" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
