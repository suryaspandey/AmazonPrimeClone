import React from "react";
import { useState } from "react";
import { Avatar, Card, Skeleton, Switch } from "antd";
const { Meta } = Card;

const CardLoader = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <div>
      <Card
        style={{
          width: 250,
          //   marginTop: 16,
          margin: 16,
        }}
        loading={loading}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  );
};

export default CardLoader;
