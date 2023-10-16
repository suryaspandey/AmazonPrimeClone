import React from "react";

const ComingSoon = () => {
  return (
    <div
      className="liveTV"
      style={{
        color: "white",
        fontStyle: "italic",
        fontSize: "40px",
        height: "100%",
      }}
    >
      {/* <h1
        style={{
          height: "100vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        This Content is coming soon !!
      </h1> */}
      <img src="/coming_soon.jpg" alt="coming soon" width="100%" />
    </div>
  );
};

export default ComingSoon;
