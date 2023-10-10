import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
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
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
