import React from "react";
import { Dropdown, Space } from "antd";
import { LiaHomeSolid } from "react-icons/lia";
import { PiTelevisionBold } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";
import { CgDisplayGrid } from "react-icons/cg";
import "./mobileMenuDropDown.css";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    type: "group",
    children: [
      {
        key: "1-1",
        label: <Link to="/home">Home</Link>,
        icon: <LiaHomeSolid />,
      },
      {
        key: "1-2",
        label: <Link to="/Live TV">Live TV</Link>,
        icon: <PiTelevisionBold />,
      },
      {
        icon: <CgDisplayGrid />,
        label: <Link to="/myStuff/MobWatchlist">My Stuff</Link>,
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
            label: <Link to="/WatchInYourLanguage/English">English</Link>,
          },
          {
            key: "Hindi",
            label: <Link to="/WatchInYourLanguage/Hindi">Hindi</Link>,
          },
          {
            key: "Telugu",
            label: <Link to="/WatchInYourLanguage/Telugu">Telugu</Link>,
          },
          {
            key: "Tamil",
            label: <Link to="/WatchInYourLanguage/Tamil">Tamil</Link>,
          },
          {
            key: "Kannada",
            label: <Link to="/WatchInYourLanguage/Kannada">Kannada</Link>,
          },
          {
            key: "Marathi",
            label: <Link to="/WatchInYourLanguage/Marathi">Marathi</Link>,
          },
          {
            key: "Punjabi",
            label: <Link to="/WatchInYourLanguage/Punjabi">Punjabi</Link>,
          },
          {
            key: "Gujarati",
            label: <Link to="/WatchInYourLanguage/Gujarati">Gujarati</Link>,
          },
          {
            key: "Bengali",
            label: <Link to="/WatchInYourLanguage/Bengali">Bengali</Link>,
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
              <Link to="/Categories/ActionAdventure/all">
                Action and Adventure
              </Link>
            ),
          },
          {
            key: "Comedy",
            label: <Link to="/Categories/Comedy/all">Comedy</Link>,
          },
          {
            key: "Documentary",
            label: <Link to="/Categories/Documentary/all">Documentary</Link>,
          },
          {
            key: "Drama",
            label: <Link to="/Categories/Drama/all">Drama</Link>,
          },
          {
            key: "Fantasy",
            label: <Link to="/Categories/Fantasy/all">Fantasy</Link>,
          },
          {
            key: "Horror",
            label: <Link to="/Categories/Horror/all">Horror</Link>,
          },
          {
            key: "Kids",
            label: <Link to="/WatchInYourLanguage/">Kids</Link>,
          },
          {
            key: "Mystery",
            label: (
              <Link to="/Categories/MysteryAndThriller/all">
                Mystery and Thriller
              </Link>
            ),
          },
          {
            key: "Romance",
            label: <Link to="/Categories/Romance/all">Romance</Link>,
          },
          {
            key: "SciFi",
            label: <Link to="/Categories/SciFi/all/">Sci-Fi</Link>,
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
        trigger={["click"]}
        menu={{
          items,
        }}
      >
        <Link onClick={(e) => e.preventDefault()}>
          <Space style={{ color: "white" }}>Menu</Space>
        </Link>
      </Dropdown>
    </>
  );
};

export default MobileMenuDropDown;
