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
  const userName = localStorage.getItem("loginUserName");
  return (
    <>
      <div className="modal-main-div">
        <img src="/Designer.png" alt="" height="100%" />
        <Button type="primary" onClick={showModal}>
          Try Your Mood
        </Button>
        <Modal
          className="modal-container"
          title={`What's your mood ${userName} ?`}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="moods-container">
            <div className="moods-main">
              <div className="mood-happy">
                <img
                  src="/happy_mood.png"
                  height={100}
                  width={100}
                  alt=""
                  onClick={() => {
                    navigate("/Categories/ActionAdventure/");
                  }}
                />
                <h4>Happy</h4>
              </div>
              <div className="mood-happy">
                <img
                  src="/sad_mood.png"
                  height={100}
                  width={100}
                  alt=""
                  onClick={() => {
                    navigate("/Categories/ActionAdventure/");
                  }}
                />
                <h4>Sad</h4>
              </div>
              <div className="mood-happy">
                <img
                  src="/bored_mood.png"
                  height={100}
                  width={100}
                  alt=""
                  onClick={() => {
                    navigate("/Categories/ActionAdventure/");
                  }}
                />
                <h4>Bored</h4>
              </div>
              <div className="mood-happy">
                <img
                  src="/romantic_mood.png"
                  height={100}
                  width={100}
                  alt=""
                  onClick={() => {
                    navigate("/Categories/ActionAdventure/");
                  }}
                />
                <h4>Romantic</h4>
              </div>
              <div className="mood-happy">
                <img
                  src="/surprise2_mood.png"
                  height={100}
                  width={100}
                  alt=""
                  onClick={() => {
                    navigate("/Categories/ActionAdventure/");
                  }}
                />
                <h4>Surprise Me!!</h4>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default UserMoodsModal;
