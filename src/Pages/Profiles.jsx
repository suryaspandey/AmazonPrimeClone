import React, { useState } from "react";
import "./profiles.css";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";

const Profiles = () => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const navigate = useNavigate();

  const handleEditClicked = () => {
    setIsEditClicked(!isEditClicked);
  };

  const handleEditProfile = () => {
    navigate("/EditProfile");
  };
  return (
    <>
      <div className="profiles-container">
        <h1 className="profile-heading">
          {isEditClicked ? (
            <span>Manage profiles</span>
          ) : (
            <span>Who's Watching?</span>
          )}
        </h1>
        <div className="profile-holder">
          <ul className="profile-ul">
            <li className="profile-li">
              <Link to={"/Home"} style={{ textDecoration: "none" }}>
                <button className="profile-img-btn">
                  <img className="profile-img" src="/adult-1.png" alt="" />
                  {isEditClicked && (
                    <MdOutlineEdit
                      className="edit-pencil-icon"
                      onClick={() => navigate("/EditProfile")}
                    />
                  )}
                </button>

                <span className="profile-name">surya pandey</span>
              </Link>
            </li>

            <li className="profile-li">
              <button className="profile-img-btn">
                <img className="profile-img" src="/kid-1.png" alt="" />
              </button>
              <span className="profile-name">Kids</span>
            </li>
          </ul>
        </div>

        <div className="profile-edit-btn-container">
          <button className="profile-edit-btn" onClick={handleEditClicked}>
            {isEditClicked ? <span>Done</span> : <span>Edit Profile</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Profiles;
