import React from "react";
import "./cardLoader.css";
import { useState } from "react";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const CardLoader = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <div>
      <Card
        className="cardLoader"
        style={{
          width: 250,
          margin: 16,
        }}
        loading={loading}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          }
        />
      </Card>
    </div>
  );
};

export default CardLoader;
