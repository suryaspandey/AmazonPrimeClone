import React from "react";
import "./profiles.css";

const Profiles = () => {
  return (
    <>
      <div className="profiles-container">
        <h1 style={{ paddingBottom: "48px" }}>Who's Watching?</h1>
        <div className="profile-holder">
          <ul className="profile-ul">
            <li className="profile-li">
              <button className="profile-img-btn">
                <img
                  className="profile-img"
                  src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
                  alt=""
                />
              </button>
              <span className="profile-name">surya pandey</span>
            </li>
            <li className="profile-li">
              <button className="profile-img-btn">
                <img
                  className="profile-img"
                  src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
                  alt=""
                />
              </button>
              <span className="profile-name">surya pandey</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profiles;
