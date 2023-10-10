import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { LiaHomeSolid } from "react-icons/lia";
import { PiTelevisionBold } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";
import { CgDisplayGrid } from "react-icons/cg";

const items = [
  {
    key: "1",
    type: "group",
    children: [
      {
        key: "1-1",
        label: <a href="/home">Home</a>,
        icon: <LiaHomeSolid />,
      },
      {
        key: "1-2",
        label: <a href="/Live TV">Live TV</a>,
        icon: <PiTelevisionBold />,
      },
      {
        icon: <CgDisplayGrid />,
        label: <a href="/myStuff/Watchlist">My Stuff</a>,
        key: "1-4",
      },
    ],
  },
  {
    key: "1-4",
    label: <span style={{ color: "#aaa" }}>Categories</span>,
    icon: <TbCategory style={{ color: "#aaa" }} />,
    children: [
      {
        key: "2-1",
        label: (
          <span className="categories-submenu-label">Featured Collections</span>
        ),
        children: [
          {
            key: "English",
            label: <a href="/WatchInYourLanguage/English">English</a>,
          },
          {
            key: "Hindi",
            label: <a href="/WatchInYourLanguage/Hindi">Hindi</a>,
          },
          {
            key: "Telugu",
            label: <a href="/WatchInYourLanguage/Telugu">Telugu</a>,
          },
          {
            key: "Tamil",
            label: <a href="/WatchInYourLanguage/Tamil">Tamil</a>,
          },
          {
            key: "Kannada",
            label: <a href="/WatchInYourLanguage/Kannada">Kannada</a>,
          },
          {
            key: "Marathi",
            label: <a href="/WatchInYourLanguage/Marathi">Marathi</a>,
          },
          {
            key: "Punjabi",
            label: <a href="/WatchInYourLanguage/Punjabi">Punjabi</a>,
          },
          {
            key: "Gujarati",
            label: <a href="/WatchInYourLanguage/Gujarati">Gujarati</a>,
          },
          {
            key: "Bengali",
            label: <a href="/WatchInYourLanguage/Bengali">Bengali</a>,
          },
        ],
      },
      {
        key: "2-2",
        label: <span className="categories-submenu-label">Genre</span>,
        children: [
          {
            key: "Action",
            label: (
              <a href="/Categories/ActionAdventure/all">Action and Adventure</a>
            ),
          },
          {
            key: "Comedy",
            label: <a href="/Categories/Comedy/all">Comedy</a>,
          },
          {
            key: "Documentary",
            label: <a href="/Categories/Documentary/all">Documentary</a>,
          },
          {
            key: "Drama",
            label: <a href="/Categories/Drama/all">Drama</a>,
          },
          {
            key: "Fantasy",
            label: <a href="/Categories/Fantasy/all">Fantasy</a>,
          },
          {
            key: "Horror",
            label: <a href="/Categories/Horror/all">Horror</a>,
          },
          {
            key: "Kids",
            label: <a href="/WatchInYourLanguage/">Kids</a>,
          },
          {
            key: "Mystery",
            label: (
              <a href="/Categories/MysteryAndThriller/all">
                Mystery and Thriller
              </a>
            ),
          },
          {
            key: "Romance",
            label: <a href="/Categories/Romance/all">Romance</a>,
          },
          {
            key: "SciFi",
            label: <a href="/Categories/SciFi/all/">Sci-Fi</a>,
          },
        ],
      },
    ],
  },
];

const MobileMenuDropDown = () => {
  return (
    <>
      <Dropdown
        // overlayStyle={{ position: "absolute", left: "0%" }}
        trigger={["click"]}
        // placement="bottomLeft"
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space style={{ color: "white" }}>Menu</Space>
        </a>
      </Dropdown>
    </>
  );
};

export default MobileMenuDropDown;
