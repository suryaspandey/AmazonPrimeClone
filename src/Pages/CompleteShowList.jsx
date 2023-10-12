import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Tooltip } from "antd";
import { Checkbox } from "antd";
import { Badge, Switch } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./completeShowList.css";
import WatchCards from "../Components/Home_Comp/WatchCards";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../APIContext";

export const CompleteShowList = () => {
  const [isArrowclicked, setIsArrowClicked] = useState(false);
  const [checkCount, setIsCheckCount] = useState(0);
  const { api } = useApi();
  const showType = useParams();
  console.log("show title location", showType.category);
  // console.log("api", api);

  const [myData, setMyData] = useState([]);
  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "zxke0qiu2960";

  useEffect(() => {
    const recievedAPI = api;
    // console.log(recievedAPI);
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(recievedAPI, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;
        console.log(allData);
        setMyData(exdata.data);
      });
  }, [projectId, bearerToken]);

  const handleCheckbox = (check) => {
    setIsCheckCount(check ? checkCount + 1 : checkCount - 1);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 414);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  if (isMobile) {
    return (
      <>
        <div className="mob-watchdetails-main">
          <ul>
            {myData.map((item) => {
              return (
                <div
                  className="mob-all-watchcards"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <div
                    className="mob-showlist-img-container"
                    // style={{
                    //   height: "100px",
                    //   width: "178px",
                    // }}
                  >
                    <Link
                      to={`/watchDetailsMob/${item._id}`}
                      state={{ projectId: projectId }}
                    >
                      {console.log("item.thumbnail", item.thumbnail)}
                      <img
                        // className="banner-img"
                        src={item.thumbnail}
                        // style={{
                        //   width: "100%",
                        //   height: "100%",
                        //   zIndex: 10,
                        //   borderRadius: "0.2rem",
                        // }}
                        style={{
                          height: "100px",
                          width: "178px",
                          borderRadius: "8px",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="mob-watchCardsDescriptions">
                    {/* <div className="play-btn-text">
                      <p href="#" className="play-btn-link">
                        <span className="home-play-btn-container-new ">
                          <Link
                            to={
                              // isMobile
                              // ?
                              `/watchDetailsMob/${item._id}`
                              // : `/watchDetails/${item._id}`
                            }
                            state={{
                              projectId: projectId,
                            }}
                          >
                            <img
                              className="home-play-btn home-play-btn-new"
                              src="/play-btn.PNG"
                              alt="play button"
                              width={265}
                            />
                          </Link>
                        </span>
                        <span
                          className="play-text"
                          style={{
                            color: "white",
                          }}
                        >
                          Resume
                        </span>
                      </p>
                      <div className="watchlist-details-container">
                        <button className="watchlist-btn continue-watching-btn">
                          <Tooltip
                            title="Watchlist"
                            placement="bottom"
                            arrow={false}
                          >
                            {isloggedIn &&
                            (watchlistStatus[item._id] ||
                              !addtowatchlist ||
                              !isInWatchList) ? (
                              <span>
                                <PlusOutlined
                                  className="home-plus-watchlist-btn "
                                  onClick={() => handleWatchList(item._id)}
                                />
                              </span>
                            ) : (
                              <AiOutlineCheck
                                className="home-plus-watchlist-btn"
                                onClick={() => handleWatchList(item._id)}
                              />
                            )}
                          </Tooltip>
                        </button>
                        <button className="watchlist-btn continue-watching-btn">
                          <Tooltip
                            onClick={() => {
                              handleTrailer();
                            }}
                            title="Trailer"
                            placement="bottom"
                            arrow={false}
                          >
                            <MoreOutlined className="home-plus-watchlist-btn" />
                          </Tooltip>
                        </button>
                      </div>
                    </div> */}
                    <h4
                      className="continue-watching-title"
                      style={{ padding: "0 10px", fontSize: "13px" }}
                    >
                      {item.title}
                    </h4>
                    <div
                      className="continue-watching-year-UA"
                      style={{ fontSize: "13px", padding: "10px" }}
                    >
                      <h4
                        className="continue-watching-title "
                        style={{ color: "grey" }}
                      >
                        {parseInt(item?.createdAt?.split("-")[0]) -
                          Math.floor(Math.random() * 10) +
                          1}
                      </h4>
                      <h4 className="continue-watching-title">2h 6min</h4>
                      <div className="UA-num">
                        <h3 style={{ fontSize: "14px" }}>U/A 16+</h3>
                      </div>
                    </div>
                    {/* <div
                      className="continue-watching-description "
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <h4
                        style={{
                          textAlign: "left",
                          fontSize: "14px",
                          paddingLeft: "7px",

                          margin: "3px",
                        }}
                      >
                        {item.description}
                      </h4>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
  return (
    <>
      {/* <div className="content-dropdown">
        <button className="showlistBtn">
          <span className="contnt-type-text">Content Type</span>
          {checkCount > 0 && (
            <span className="checkCountSpan">{checkCount}</span>
          )}

          <span
            onClick={() => setIsArrowClicked(!isArrowclicked)}
            style={{ fontSize: "24px" }}
          >
            {isArrowclicked ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </button>
        {isArrowclicked && (
          <div className="checkbox-container">
            <button className="showlistBtnCheckbox showCheckbox">
              <Checkbox
                className="checkboxText"
                onChange={(e) => handleCheckbox(e.target.checked)}
              >
                Movies
              </Checkbox>
            </button>
            <button className="showlistBtnCheckbox showCheckbox">
              <Checkbox
                className="checkboxText"
                onChange={(e) => handleCheckbox(e.target.checked)}
              >
                TV Shows
              </Checkbox>
            </button>
          </div>
        )}
      </div> */}
      <div className="complete-showList-container">
        <div className="complete-show-list-grid">
          {/* <div className="show-container"> */}
          <div className="show-name">
            <h1
              style={{ color: "white", padding: "36px 24px" }}
            >{`${showType.category} movies`}</h1>
          </div>
        </div>
        {/* <div className="carousel-main"> */}
        <div>
          <WatchCards
            actualData={myData}
            projectId={projectId}
            // className="complete-cards-main"
            className="complete-cards-ul-grid"
          />
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
