import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./homeTabDropDown.css";
import { DownOutlined } from "@ant-design/icons";
import { ConfigProvider, Dropdown, Menu, Space, Typography } from "antd";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { useHistory } from "react-router-dom";

const items = [
  {
    key: "1",
    label: "Sign In",
    path: "/login",
  },
  {
    key: "2",
    label: "Watch Anywhere",
    path: "/watchAnywhere",
  },
  // {
  //   key: "3",
  //   label: "",
  //   path: "/Home/AllTVShows",
  // },
];

const AvatarSignINDropdown = ({ isHover }) => {
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLinkClick = (item) => {
    if (item.path) {
      navigate(item.path);
      // history.push(item.path);
    }
  };

  const menu = (
    <Menu
      style={{
        padding: "0px",
        margin: "0px",
        borderRadius: "0px",
        position: "absolute",

        right: "-10px",
      }}
    >
      {items.map((item) => (
        <Menu.Item
          style={{
            borderRadius: "0px",
            // position: "absolute",
            // right: "0px",
          }}
          className="dropdown-menu-items"
          key={item.key}
          onClick={() => handleLinkClick(item)}
          // style={{ padding: "8px 16px", backgroundColor: "blue" }}
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <>
      <Dropdown
        // style={{ color: "red" }}
        overlay={menu}
        trigger={["hover"]}
        // placement="bottomCenter"
        // menu={{
        //   items,
        //   selectable: true,
        //   defaultSelectedKeys: ["1"],
        //   onItemClick: ({ key }) => {
        //     const selectedItem = items.find((item) => item.key === key);
        //     handleLinkClick(selectedItem);
        //   },
        // }}
      >
        <Typography.Link>
          <Space>{isHover ? <IoIosArrowUp /> : <IoIosArrowDown />}</Space>
          <Space>
            {/* {isHover ? (
              <img
                src="/avatar.png"
                alt="avatar"
                height={30}
                width={30}
                className="avatar-navitagor"
              />
            ) : null} */}
          </Space>
        </Typography.Link>
      </Dropdown>

      {/* <ul className={`sub-menu ${isHover ? "active" : ""}`}>
        <li>
          <Link to={"/Home"}>All</Link>
        </li>

        <li>
          <Link
            to={"/Home/AllMovies"}
            onClick={() => {
              console.log("All Movies clicked");
            }}
          >
            Movies
          </Link>
        </li>

        <li>
          <Link
            to={"/Home/AllTVShows"}
            onClick={() => {
              console.log("All TVS clicked");
            }}
          >
            TV Shows
          </Link>
        </li>
      </ul> */}
    </>
  );
};

export default AvatarSignINDropdown;
