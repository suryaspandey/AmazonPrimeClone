import React from "react";
import "./editProfile.css";

function EditProfile() {
  return (
    <>
      <div className="editProfile-heading">Edit profile</div>
      <div className="editProfile-img-container">
        <ul className="editProfile-ul">
          <li className="editProfile-li">
            <div className="editProfile">
              <img className="editprofile-img" src="/adult-1.png" alt="" />
            </div>
          </li>
        </ul>
        <button className="profileChange-btn">
          <p className="change-profileImg">Change</p>
        </button>
        <div className="input-profileName">
          <input
            className="input-edit-create-name"
            type="text"
            minLength={1}
            maxLength={50}
            required
            placeholder="Enter name"
            value="surya pandey"
          />
        </div>

        <div className="editProfile-save-cancel-btns">
          <button className="editProfile-cancel-btn">Cancel</button>
          <button className="editProfile-cancel-btn">Save Changes</button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
