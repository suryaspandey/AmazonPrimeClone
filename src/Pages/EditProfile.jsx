import React from "react";
import "./editProfile.css";
import { useState } from "react";

function EditProfile() {
  const [profileImg, setprofileImg] = useState(() => {
    const profileImage = localStorage.getItem("profileImage");
    return profileImage ? profileImage : "/avatar.png";
  });

  const [userName, setUserName] = useState("");
  const [isCancel, setIsCancel] = useState(false);

  const handleCancelChanges = () => {};

  const handleSaveChanges = () => {
    setUserName(userName);
    localStorage.setItem("profileUserName", userName);

    // setprofileImg(profileImage);

    setprofileImg(profileImg);
    console.log("profileImg", profileImg);

    setIsCancel(false);
  };

  const handleProfileImgChange = async (event) => {
    const file = event.target.files[0];

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
        console.log(data.data.user.profileImage);
        setprofileImg(data.data.user.profileImage);
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
      <div className="editProfile-heading">Edit profile</div>
      <div className="editProfile-img-container">
        <ul className="editProfile-ul">
          <li className="editProfile-li">
            <div className="editProfile">
              <img className="editprofile-img" src={profileImg} alt="" />
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
            // value={data.data.user.name}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            defaultValue={userName}
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
