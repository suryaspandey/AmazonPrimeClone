import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router";
import "./userMoodsModel.css";
const UserMoodsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    navigate("/");
  };
  const navigate = useNavigate();
  const userNameSM = localStorage.getItem("loginUserName");
  const userName = userNameSM[0].toUpperCase() + userNameSM.slice(1);

  const surpriseMeOptions = [
    "Fantasy",
    "Documentary",
    "Horror",
    "Comedy",
    "MysteryAndThriller",
    "Drama",
  ];
  let n = surpriseMeOptions.length;

  let num = Math.floor(Math.random() * n);

  for (let i = 0; i < n; i++) {
    num = Math.floor(Math.random() * n);
  }

  return (
    <>
      <div className="modal-main-div">
        <img src="/Designer.png" alt="" height="100%" width="100%" />
        <Button type="primary" onClick={showModal}>
          <span>
            Pick Your Mood <i>{userName}</i> !!
          </span>
        </Button>
        <Modal
          title={`What's your mood ${userName} ?`}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              className="noThanks-mood-btn"
              key="submit"
              type="primary"
              onClick={handleCancel}
            >
              Skip
            </Button>,
          ]}
        >
          <div className="moods-container">
            <div className="moods-main">
              <div className="mood-happy">
                <img
                  className="moods-imgs"
                  src="/happy_mood.png"
                  alt=""
                  onClick={() => {
                    navigate("/Categories/Fantasy/all");
                  }}
                />
                <h4 style={{ margin: "0px" }}>Happy</h4>
              </div>
              <div className="mood-happy">
                <img
                  className="moods-imgs"
                  src="/sad_mood.png"
                  alt=""
                  onClick={() => {
                    navigate("/Categories/Comedy/all");
                  }}
                />
                <h4 style={{ margin: "0px" }}>Sad</h4>
              </div>
              <div className="mood-happy">
                <img
                  className="moods-imgs"
                  src="/bored_mood.png"
                  alt=""
                  onClick={() => {
                    navigate("/Categories/ActionAdventure/all");
                  }}
                />
                <h4 style={{ margin: "0px" }}>Bored</h4>
              </div>
              <div className="mood-happy">
                <img
                  className="moods-imgs"
                  src="/romantic_mood.png"
                  alt=""
                  onClick={() => {
                    navigate("/Categories/Romance/all");
                  }}
                />
                <h4 style={{ margin: "0px" }}>Romantic</h4>
              </div>
              <div className="mood-happy">
                <img
                  className="moods-imgs"
                  src="/surprise2_mood.png"
                  alt=""
                  onClick={() => {
                    navigate(`/Categories/${surpriseMeOptions[num]}/all`);
                  }}
                />
                <h4 style={{ margin: "0px" }}>Surprise Me!!</h4>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default UserMoodsModal;
