import React, { useEffect, useState } from "react";
import { Series_Episodes } from "../../Components/Episodes/Series_Episodes";
import { ShowDetails } from "../../Components/ShowDetails/ShowDetails";
import { useNavigate, useParams } from "react-router";
import RelatedMovies from "../../Components/Episodes/RelatedMovies";
import { Tooltip } from "antd";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { GiPartyPopper } from "react-icons/gi";
import { HiOutlineShare } from "react-icons/hi";
import { Tabs, ConfigProvider } from "antd";
// import { PlusOutlined } from "react-icons/pi"
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import "./watcDetailsMobile.css";
import Mobile_Episodes_details from "../../Components/Episodes/Mobile_Episodes_details";
import Loader from "../../Components/Loader/Loader";

const WatcDetailsMobile = () => {
  let { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlayBtnClicked, SetIsPlayBtnClicked] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const navigate = useNavigate();
  const [TVShowType, setTVShowType] = useState(false);

  const [isInWatchList, setIsInWatchList] = useState(false);
  const projectId = "zxke0qiu2960";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
          {
            headers: {
              projectId: "zxke0qiu2960",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();

          setDetails(data);

          const showtype = data.data.type;
          if (showtype === "web series" || showtype === "tv show") {
            setTVShowType(true);
          }

          const keywords = data.data.keywords;
          if (keywords) {
          }
        } else {
          console.log("Failed to fetch data:", response.statusText);
        }
      } catch (err) {
        console.log("Error fetching data: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const onChange = (key) => {
    setActiveTab(key);
  };

  const items = [
    {
      key: "1",
      label: TVShowType ? "Episodes" : "Related Movies",
    },
    {
      key: "2",
      label: "Details",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "1":
        return (
          <>
            {TVShowType ? (
              <Mobile_Episodes_details
                imgdata={details.data.thumbnail}
                id={details.data._id}
              />
            ) : (
              <RelatedMovies />
            )}
          </>
        );
      case "2":
        return (
          <ShowDetails
            director={details.data.director}
            cast={details.data.cast}
          />
        );
      default:
        return null;
    }
  };

  const handlePlayBtnClick = () => {
    SetIsPlayBtnClicked(true);
  };

  const handleShowDetials = () => {
    navigate(`/TVShow/${id}`);
  };
  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const [addtowatchlist, setAddTowatchlist] = useState("false");

  const watchlistUpdateAPI =
    "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
  const bearerToken = localStorage.getItem("bearer_token");

  const handleWatchList = () => {
    if (!isloggedIn) {
      window.location.href = "/login";
      return;
    }

    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    };

    const body = {
      showId: details.data._id,
    };

    fetch(watchlistUpdateAPI, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((watchData) => {
        setIsInWatchList((prevStatus) => !prevStatus);
        setAddTowatchlist(true);
        handleRemoveFromWatchList(id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleRemoveFromWatchList = (removedItem) => {
    const updatedWatchList = watchlistData.filter(
      (item) => item._id !== removedItem
    );
    setWatchlistData(updatedWatchList);
  };

  const handleComingSoon = () => {
    navigate("/comingSoon");
  };
  return (
    <div className="banner-watchDetails-container1">
      {loading ? (
        <Loader />
      ) : details ? (
        <>
          <div className="watchDetails-img1">
            <img src={details.data.thumbnail} alt={details.title} />
          </div>

          <div className="details-btns-container1">
            <span className="home-play-btn-container-new1">
              <div className="watchDetails-play-btn-container1">
                <img
                  onClick={() => SetIsPlayBtnClicked(true)}
                  className="details-play-btn1"
                  src="/play-btn.PNG"
                  alt="play button"
                  width={275}
                />
                <span className="play-text1 " style={{ color: "white" }}>
                  Play
                </span>
                {isPlayBtnClicked && handleShowDetials()}
              </div>
            </span>

            <div className="more-purchase-options1">
              <button
                className="more-purchase-options-btn1"
                onClick={handleComingSoon}
              >
                More Purchase Options
              </button>
            </div>

            <div className="watchDetails-btn-options-container1">
              <span className="home-play-btn-container-new trailer-span">
                <span onClick={handleComingSoon}>
                  <BiMoviePlay className="trailer-img1" />
                  <p className="mob-watchdetails-tooltip-name">Trailer</p>
                </span>
              </span>
              <span className="home-play-btn-container-new trailer-span">
                <span>
                  {(isloggedIn && !isInWatchList) ||
                  !addtowatchlist ||
                  !isInWatchList ? (
                    <span>
                      <AiOutlinePlus
                        className="trailer-img1"
                        onClick={handleWatchList}
                      />
                    </span>
                  ) : (
                    <AiOutlineCheck
                      className="trailer-img1"
                      onClick={() => handleWatchList()}
                    />
                  )}

                  <p className="mob-watchdetails-tooltip-name">Watchlist</p>
                </span>
              </span>
              <span
                className="home-play-btn-container-new trailer-span"
                onClick={handleComingSoon}
              >
                <span onClick={handleComingSoon}>
                  <GoDownload className="trailer-img1" />
                  <p className="mob-watchdetails-tooltip-name">Download</p>
                </span>
              </span>
              <span
                className="home-play-btn-container-new trailer-span"
                onClick={handleComingSoon}
              >
                <span>
                  <GiPartyPopper className="trailer-img1" />
                  <p className="mob-watchdetails-tooltip-name">Watch Party</p>
                </span>
              </span>
              <span
                className="home-play-btn-container-new trailer-span"
                onClick={handleComingSoon}
              >
                <span>
                  <HiOutlineShare className="trailer-img1" />
                  <p className="mob-watchdetails-tooltip-name">Share</p>
                </span>
              </span>
            </div>
          </div>

          <div className="watchdetails-text-btn-content1">
            <div className="details-title-description1">
              <h1 className="show-title1" style={{ fontSize: "50px" }}>
                {details.data.title}
              </h1>
              <h3 className="show-description1">{details.data.description}</h3>

              <div className="imdb-details1">
                <span className="imdb-rating">IMDb 8.5</span>
                <span className="show-duration">1 hr 30 min</span>
                <span className="imdb-year">2020</span>
              </div>
              <div className="genre1">
                <ul style={{ color: "white" }}>
                  {details.data.keywords.map((item, index) => {
                    return (
                      <li key={index}>
                        <span>
                          <a
                            href=""
                            style={{
                              color: "white",
                            }}
                          >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                          </a>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="episodes-details-container1">
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    colorPrimary: "white",
                    itemHoverColor: "white",
                    itemActiveColor: "white",
                    itemColor: "#aaa",
                  },
                },
              }}
            >
              <div className="tabs-container1">
                <Tabs
                  defaultActiveKey="1"
                  items={items}
                  style={{ color: "white" }}
                  onChange={onChange}
                  activeKey={activeTab}
                />
              </div>
            </ConfigProvider>
            {renderTabContent()}
          </div>
        </>
      ) : (
        <div style={{ color: "white", fontSize: "100px" }}>
          Details not available at the moment!
        </div>
      )}
    </div>
  );
};

export default WatcDetailsMobile;
