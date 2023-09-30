import React from "react";
import { Carousel } from "antd";
import "./subscription.css";

const contentStyle = {
  height: "560px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  //   background: "#364d79",
  background: "white",
};
const Subscription = () => {
  return (
    <>
      <div className="subscription-carousel">Carousel component</div>
      <div className="subscription-cards-container">
        <div className="subscription-carousel">
          <Carousel

          //   autoplay
          >
            <div className="subscription-card">
              <img
                className="subscription-carousel-img"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Teaser1_2/J23_T2_PC_Rec_Header_V2.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
          <div className="subsription-carousel-text"></div>
        </div>
      </div>
      <div className="subscription-benifits-cards-container">
        <div className="subscription-cards prime-shipping-benefits">
          <div className="subscription-card-img">
            <img
              src="https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX1080_FMwebp_.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
