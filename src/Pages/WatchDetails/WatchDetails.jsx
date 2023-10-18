import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./watchDetils.css";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { GiPartyPopper } from "react-icons/gi";
import { HiOutlineShare } from "react-icons/hi";
import { Tooltip, message } from "antd";
import { Tabs, ConfigProvider } from "antd";
import { Series_Episodes } from "../../Components/Episodes/Series_Episodes";
import { ShowDetails } from "../../Components/ShowDetails/ShowDetails";
import RelatedMovies from "../../Components/Episodes/RelatedMovies";
import Loader from "../../Components/Loader/Loader";

const WatchDetails = () => {
  let { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlayBtnClicked, SetIsPlayBtnClicked] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const navigate = useNavigate();
  const [TVShowType, setTVShowType] = useState(false);
  const [isInWatchList, setIsInWatchList] = useState(false);
  const [addtowatchlist, setAddTowatchlist] = useState("false");

  const bearerToken = localStorage.getItem("bearer_token");

  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const projectId = "zxke0qiu2960";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 415);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
              <Series_Episodes
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

  const watchlistUpdateAPI =
    "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
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
        message.success("Added to Watchlist");

        // handleRemoveFromWatchList(id);
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
    message.success("Removed from Watchlist");
  };

  const handleComingSoon = () => {
    navigate("/comingSoon");
  };
  return (
    <div className="home">
      <div className="banner-watchDetails-container">
        {loading ? (
          <Loader />
        ) : details ? (
          <>
            <div className="watchDetails-img">
              <img src={details.data.thumbnail} alt={details.title} />
            </div>
            <div className="content-main"></div>
            <div className="watchdetails-text-btn-content">
              <div className="details-title-description">
                <h1 className="show-title" style={{ fontSize: "50px" }}>
                  {details.data.title}
                </h1>
                <h3 className="show-description">{details.data.description}</h3>

                <div className="imdb-details">
                  <span className="imdb-rating">IMDb 8.5</span>
                  <span className="show-duration">1 hr 30 min</span>
                  <span className="imdb-year">2020</span>
                </div>
                <div className="genre">
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
                <div className="included-with-prime-img-txt">
                  <img
                    className="blue-tick-img"
                    src="/prime-blue-tick.png"
                    alt=""
                  />
                  <h5
                    style={{
                      color: "white",
                      margin: "8px",
                    }}
                  >
                    Included with prime
                  </h5>
                </div>
              </div>
              <div className="details-btns-container">
                <span className="home-play-btn-container-new  ">
                  <div className="watchDetails-play-btn-container">
                    <img
                      onClick={() => SetIsPlayBtnClicked(true)}
                      className="details-play-btn"
                      src="/play-btn.PNG"
                      alt="play button"
                      width={275}
                    />
                    <span className="play-text " style={{ color: "white" }}>
                      Play
                    </span>
                    {isPlayBtnClicked && handleShowDetials()}
                  </div>
                </span>

                <span>
                  <div className="more-purchase-options">
                    <button
                      className="more-purchase-options-btn"
                      onClick={handleComingSoon}
                    >
                      More Purchase Options
                    </button>
                  </div>
                </span>
                <div className="watchDetails-btn-options-container">
                  <span
                    className="home-play-btn-container-new trailer-span"
                    onClick={handleComingSoon}
                  >
                    <Tooltip title="Trailer" placement="bottom" arrow={false}>
                      <span>
                        <BiMoviePlay className="trailer-img" />
                      </span>
                    </Tooltip>
                  </span>
                  <span className="home-play-btn-container-new trailer-span">
                    <Tooltip title="Watchlist" placement="bottom" arrow={false}>
                      <span>
                        {(isloggedIn && !isInWatchList) ||
                        !addtowatchlist ||
                        !isInWatchList ? (
                          <span>
                            <AiOutlinePlus
                              className="trailer-img"
                              onClick={handleWatchList}
                            />
                          </span>
                        ) : (
                          <AiOutlineCheck
                            className="trailer-img"
                            onClick={() => handleWatchList()}
                          />
                        )}
                      </span>
                    </Tooltip>
                  </span>
                  <span
                    className="home-play-btn-container-new trailer-span"
                    onClick={handleComingSoon}
                  >
                    <Tooltip title="Download" placement="bottom" arrow={false}>
                      <span>
                        <GoDownload className="trailer-img" />
                      </span>
                    </Tooltip>
                  </span>
                  <span
                    className="home-play-btn-container-new trailer-span"
                    onClick={handleComingSoon}
                  >
                    <Tooltip
                      title="Watch Party"
                      placement="bottom"
                      arrow={false}
                    >
                      <span>
                        <GiPartyPopper className="trailer-img" />
                      </span>
                    </Tooltip>
                  </span>
                  <span
                    className="home-play-btn-container-new trailer-span"
                    onClick={handleComingSoon}
                  >
                    <Tooltip title="Share" placement="bottom" arrow={false}>
                      <span>
                        <HiOutlineShare className="trailer-img" />
                      </span>
                    </Tooltip>
                  </span>
                </div>
              </div>
            </div>
            <div className="episodes-details-container">
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
                <div className="tabs-container">
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
    </div>
  );
};

export default WatchDetails;
