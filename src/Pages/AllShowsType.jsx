import React from "react";
import "./allShowsType.css";
import { Checkbox } from "antd";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./completeShowList.css";
import { useApi } from "../APIContext";

const AllShowsType = () => {
  const [isArrowclicked, setIsArrowClicked] = useState(false);
  const [checkCount, setIsCheckCount] = useState(0);
  const { api } = useApi();

  const [myData, setMyData] = useState([]);

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

  return (
    <>
      <div className="content-dropdown">
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
      </div>
    </>
  );
};

export default AllShowsType;
