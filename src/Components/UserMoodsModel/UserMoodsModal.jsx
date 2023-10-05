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
      <Button type="primary" onClick={showModal}>
        {`Whats your mood ${userName} ?`}
      </Button>
      <Modal
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
              <h5>Happy</h5>
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
              <h5>Sad</h5>
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
              <h5>Bored</h5>
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
              <h5>Romantic</h5>
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
              <h5>Surprise Me!!</h5>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default UserMoodsModal;
