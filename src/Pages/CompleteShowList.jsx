import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Checkbox } from "antd";
import { Badge, Switch } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./completeShowList.css";
import { Flag } from "@material-ui/icons";
import { checkboxClasses } from "@mui/material";

// const onChange = (e) => {
//     // console.log(`checked = ${e.target.checked}`);
//     e.target.value =
// };

// const items = [
//     {
//         label: (
//             <a href="#">
//                 <Checkbox onChange={handleCheckbox}>Checkbox</Checkbox>;
//             </a>
//         ),
//         key: "0",
//     },
//     {
//         label: <a href="https://www.aliyun.com">2nd menu item</a>,
//         key: "1",
//     },
//     {
//         type: "divider",
//     },
//     {
//         label: "3rd menu item",
//         key: "3",
//     },
// ];

export const CompleteShowList = () => {
    const [show, setShow] = useState(true);
    const [isArrowclicked, setIsArrowClicked] = useState(false);
    const [checkCount, setIsCheckCount] = useState(0);

    const handleCheckbox = (check) => {
        setIsCheckCount(check ? checkCount + 1 : checkCount - 1);
    };

    return (
        <>
            <div style={{ color: "white", padding: "24px 0px 24px 72px" }}>
                CompleteShowList
            </div>

            <div className="content-dropdown">
                <button>
                    <span>Content Type</span>
                    {/* <span style={{ color: "red", fontSize: "24px" }}> */}
                    {checkCount > 0 && (
                        <span style={{ color: "red", fontSize: "24px" }}>
                            {checkCount}
                        </span>
                    )}
                    {/* </span> */}
                    <span>
                        {/* <AiOutlineDown /> */}
                        <IoIosArrowUp
                            onClick={() => setIsArrowClicked(!isArrowclicked)}
                        />
                        {isArrowclicked ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        {/* <IoIosArrowDown /> */}
                    </span>
                </button>
                {isArrowclicked && (
                    <div className="checkbox-container">
                        <button>
                            <Checkbox
                                // onClick={handleCheckbox}
                                onChange={(e) =>
                                    handleCheckbox(e.target.checked)
                                }
                            >
                                Movies
                            </Checkbox>

                            <Checkbox
                                // onClick={handleCheckbox }
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

            <div className="shows-list-container"></div>
        </>
    );
};
