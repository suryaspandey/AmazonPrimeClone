import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Checkbox } from "antd";
import { Badge, Switch } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./completeShowList.css";
import { Flag } from "@material-ui/icons";
import { checkboxClasses } from "@mui/material";
import { Catalog } from "../Components/Catalog/Catalog";
import WatchCards from "../Components/Home_Comp/WatchCards";

export const CompleteShowList = () => {
    const [isArrowclicked, setIsArrowClicked] = useState(false);
    const [checkCount, setIsCheckCount] = useState(0);

    const [myData, setMyData] = useState([]);

    const bearerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";
    const projectId = "zxke0qiu2960";

    useEffect(() => {
        const url = "https://academics.newtonschool.co/api/v1/ott/show";
        const webSeriesurl = `https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "web series"}`;

        const headers = {
            projectId: projectId,
            Authorization: `Bearer ${bearerToken}`,
        };

        fetch(webSeriesurl, { method: "GET", headers: headers })
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
            <div style={{ color: "white", padding: "24px 0px 24px 72px" }}>
                CompleteShowList
            </div>

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
                                onChange={(e) =>
                                    handleCheckbox(e.target.checked)
                                }
                            >
                                Movies
                            </Checkbox>
                        </button>
                        <button className="showlistBtnCheckbox showCheckbox">
                            <Checkbox
                                className="checkboxText"
                                onChange={(e) =>
                                    handleCheckbox(e.target.checked)
                                }
                            >
                                TV Shows
                            </Checkbox>
                        </button>
                    </div>
                )}
            </div>

            <Catalog />
            <div
                className="showList-container"

                // className="carousel-main"
            >
                {myData.map((item) => {
                    return (
                        <WatchCards
                            key={item._id}
                            actualData={myData}
                            projectId={projectId}
                        />
                    );
                })}
            </div>
        </>
    );
};
