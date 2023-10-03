import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./watchdetils.css";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { GiPartyPopper } from "react-icons/gi";
import { HiOutlineShare } from "react-icons/hi";
import { Tooltip } from "antd";
import { Tabs, ConfigProvider } from "antd";
import { Series_Episodes } from "../Components/Episodes/Series_Episodes";
import { ShowDetails } from "../Components/ShowDetails/ShowDetails";
import RelatedMovies from "../Components/Episodes/RelatedMovies";

const WatchDetails = () => {
  let { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlayBtnClicked, SetIsPlayBtnClicked] = useState(false);
  // const TabPane = Tabs.TabPane;
  const [activeTab, setActiveTab] = useState("1");
  const navigate = useNavigate();
  const [TVShowType, setTVShowType] = useState(false);

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
          console.log(data);
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
        setLoading(false); // Set loading to false whether successful or not
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

  // if (!details) {
  //     return <div>Loading...</div>; // Show a loading message while data is being fetched
  // }

  const handlePlayBtnClick = () => {
    SetIsPlayBtnClicked(true);
  };

  const handleShowDetials = () => {
    navigate(`/TVShow/${id}`);
  };
  return (
    <div className="banner-watchDetails-container">
      {loading ? (
        <div style={{ color: "white", fontSize: "100px" }}>Loading...</div>
      ) : details ? (
        <>
          <div className="watchDetails-img">
            <img src={details.data.thumbnail} alt={details.title} />
          </div>

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
              <span className="home-play-btn-container-new ">
                <img
                  onClick={() => SetIsPlayBtnClicked(true)}
                  className="details-play-btn"
                  src="/play-btn.PNG"
                  alt="play button"
                  width={275}
                />
                {isPlayBtnClicked && handleShowDetials()}
              </span>
              <span style={{ color: "white" }}>Play</span>
              <span>
                <div className="more-purchase-options">
                  <button className="more-purchase-options-btn">
                    More Purchase Options
                  </button>
                </div>
              </span>
              <span className="home-play-btn-container-new trailer-span">
                <Tooltip title="Trailer" placement="bottom" arrow={false}>
                  <span>
                    <BiMoviePlay className="trailer-img" />
                  </span>
                </Tooltip>
              </span>
              <span className="home-play-btn-container-new trailer-span">
                <Tooltip title="Watchlist" placement="bottom" arrow={false}>
                  <span>
                    <AiOutlinePlus className="trailer-img" />
                  </span>
                </Tooltip>
              </span>
              <span className="home-play-btn-container-new trailer-span">
                <Tooltip title="Download" placement="bottom" arrow={false}>
                  <span>
                    <GoDownload className="trailer-img" />
                  </span>
                </Tooltip>
              </span>
              <span className="home-play-btn-container-new trailer-span">
                <Tooltip title="Watch Party" placement="bottom" arrow={false}>
                  <span>
                    <GiPartyPopper className="trailer-img" />
                  </span>
                </Tooltip>
              </span>
              <span className="home-play-btn-container-new trailer-span">
                <Tooltip title="Share" placement="bottom" arrow={false}>
                  <span>
                    <HiOutlineShare className="trailer-img" />
                  </span>
                </Tooltip>
              </span>
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
  );
};

export default WatchDetails;
