import React, { useEffect } from "react";
import "./editProfile.css";
import { useState } from "react";
import { message } from "antd";

function EditProfile() {
  const [currProfileImg, setCurrProfileImg] = useState(() => {
    const profileImage = localStorage.getItem("profileImage");
    return profileImage ? profileImage : "/avatar.png";
  });

  const [newProfileImg, setNewProfileImg] = useState(currProfileImg);

  const loginUserName = localStorage.getItem("loginUserName");

  const [userName, setUserName] = useState(loginUserName);
  const [isCancelled, setIscancelled] = useState(false);

  const handleCancelChanges = () => {
    setNewProfileImg(currProfileImg);
    setIscancelled(true);
    {
      isCancelled && message.info("Changes Cancelled");
    }
  };

  const handleSaveChanges = () => {
    setCurrProfileImg(newProfileImg);
    localStorage.setItem("profileImage", newProfileImg);
    localStorage.setItem("profileUserName", userName);
    window.dispatchEvent(new Event("storage"));
    setIscancelled(false);
    {
      !isCancelled && message.success("Changes Saved");
    }
  };

  const handleProfileImgChange = async (event) => {
    const file = event.target.files[0];
    // file is designed for multiple file select
    // in my case since its a single select, we wrote
    // files[0] to select the first an the only file added.
    // const file is a key and the file uploaded is the value.

    // formData: FormData is simply a data structure that can be used to store key-value pairs.
    // It's designed for holding forms data i.e you can use it with JavaScript to build an object
    //that corresponds to an HTML form
    // this formData is applicable on input tags where you would want to upload a file(word doc, pdf, img etc)
    // any input of file is handed by FormData.
    // fileInput is the HTML inut element that will be used to select the file that we'll be uploading.

    //broswer does not expose file system, so to access files we use input type file (input element of HTML)(and input file can only be handled by formData)
    // which allows the developer to access files

    const formData = new FormData();
    formData.append("profileImage", file);
    const bearerToken = localStorage.getItem("bearer_token");

    const projectId = "zxke0qiu2960";

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/updateProfileImage",
        {
          method: "PATCH",
          body: formData,
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            projectId: projectId,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        setNewProfileImg(data.data.user.profileImage);
        localStorage.setItem("profileImage", data.data.user.profileImage);
        setUserName(data.data.user.name);
      } else {
        console.error("Error updating profile image:", data.message);
      }
    } catch (err) {
      console.error("Error updating profile image:", err);
    }
  };
  return (
    <>
      <div className="editProfile-heading">Edit Profile</div>
      <div className="editProfile-img-container">
        <ul className="editProfile-ul">
          <li className="editProfile-li">
            <div className="editProfile">
              <img className="editprofile-img" src={currProfileImg} alt="" />
            </div>
          </li>
        </ul>
        <label htmlFor="profileImageInput" className="profileChange-btn">
          <p className="change-profileImg" onChange={handleProfileImgChange}>
            Change
          </p>
        </label>
        <input
          id="profileImageInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleProfileImgChange}
        />
        <div className="input-profileName">
          <input
            className="input-edit-create-name"
            type="text"
            minLength={1}
            maxLength={50}
            required
            placeholder="Enter name"
            value={userName}
          />
        </div>

        <div className="editProfile-save-cancel-btns">
          <button
            className="editProfile-cancel-btn"
            onClick={handleCancelChanges}
          >
            Cancel
          </button>
          <button
            className="editProfile-cancel-btn"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
