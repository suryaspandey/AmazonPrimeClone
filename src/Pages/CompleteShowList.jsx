import React, { useEffect, useState } from "react";
import "./completeShowList.css";
import WatchCards from "../Components/Home_Comp/WatchCards";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../APIContext";

export const CompleteShowList = () => {
  const [isArrowclicked, setIsArrowClicked] = useState(false);
  const [checkCount, setIsCheckCount] = useState(0);
  const { api } = useApi();
  const showType = useParams();

  const [myData, setMyData] = useState([]);
  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "zxke0qiu2960";

  useEffect(() => {
    const recievedAPI = api;
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(recievedAPI, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;
        setMyData(exdata.data);
      });
  }, [projectId, bearerToken]);

  const handleCheckbox = (check) => {
    setIsCheckCount(check ? checkCount + 1 : checkCount - 1);
  };

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
  if (isMobile) {
    return (
      <>
        <div className="complete-showList-container">
          <div className="show-name">
            <h1
              style={{ color: "white", padding: "3px 24px", fontSize: "20px" }}
            >
              {`${
                showType.category.includes("TV Show")
                  ? showType.category
                  : showType.category + " movies"
              }`}
            </h1>
          </div>
        </div>
        <div className="mob-watchdetails-main">
          <ul>
            {myData.map((item) => {
              return (
                <div
                  className="mob-all-watchcards"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div className="mob-showlist-img-container">
                    <Link
                      to={`/watchDetailsMob/${item._id}`}
                      state={{ projectId: projectId }}
                    >
                      <img
                        src={item.thumbnail}
                        style={{
                          height: "100px",
                          width: "178px",
                          borderRadius: "8px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="mob-watchCardsDescriptions">
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
      <div className="complete-showList-container">
        <div className="show-name">
          <h1 style={{ color: "white", padding: "36px 24px" }}>
            {`${
              showType.category.includes("TV Show")
                ? showType.category
                : showType.category + " movies"
            }`}
          </h1>
        </div>
      </div>

      <div>
        <WatchCards
          actualData={myData}
          projectId={projectId}
          className="seeMoreList"
        />
      </div>
    </>
  );
};
