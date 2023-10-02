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
        <h3 style={{ color: "white", padding: "0 30px", margin: "0px" }}>
          Prime Shipping benefits
        </h3>
        <div className="carousel-main-subs">
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/b/?node=12627912031&ref=Shipping_PV_Dashborad&ref_=atv_me_pri_c_GjNWfd_qiGCL6_2_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/b/?node=12627912031&ref=Shipping_PV_Dashborad&ref_=atv_me_pri_c_GjNWfd_slAaBj_2_2">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_2/feb41b16-8cb7-4aa1-9821-d7ae8635917c._UR1920,1080_SX360_FMwebp_.jpeg%20360w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_2/feb41b16-8cb7-4aa1-9821-d7ae8635917c._UR1920,1080_SX480_FMwebp_.jpeg%20480w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_2/feb41b16-8cb7-4aa1-9821-d7ae8635917c._UR1920,1080_SX720_FMwebp_.jpeg%20720w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_2/feb41b16-8cb7-4aa1-9821-d7ae8635917c._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/b/?node=12627912031&ref=Shipping_PV_Dashborad&ref_=atv_me_pri_c_GjNWfd_slAaBj_2_2">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_3/029e7d14-e8d0-4128-bbc3-5fea5531d98e._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_3/029e7d14-e8d0-4128-bbc3-5fea5531d98e._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_3/029e7d14-e8d0-4128-bbc3-5fea5531d98e._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_3/029e7d14-e8d0-4128-bbc3-5fea5531d98e._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="subscription-benifits-cards-container">
        <h3 style={{ color: "white", padding: "0 30px", margin: "0px" }}>
          Amazon Pay ICICI card benefits
        </h3>
        <div className="carousel-main-subs">
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/cbcc/marketpage?ref_=atv_me_pri_c_TrGy8k_uQW3qc_3_1&lop=false">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/null/2bac4c2d-35e5-4338-97c3-af90aa345d33._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/null/2bac4c2d-35e5-4338-97c3-af90aa345d33._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/null/2bac4c2d-35e5-4338-97c3-af90aa345d33._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/null/2bac4c2d-35e5-4338-97c3-af90aa345d33._UR1920,1080_SX1080_FMwebp_.jpeg "
                alt=""
              />
            </a>
          </div>
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/cbcc/marketpage?ref_=atv_me_pri_c_TrGy8k_uQW3qc_3_1&lop=false">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/null/bcb92702-13f3-42cb-9908-8fb24daa49bb._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/null/bcb92702-13f3-42cb-9908-8fb24daa49bb._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/null/bcb92702-13f3-42cb-9908-8fb24daa49bb._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/null/bcb92702-13f3-42cb-9908-8fb24daa49bb._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/cbcc/marketpage?ref_=atv_me_pri_c_TrGy8k_uQW3qc_3_1&lop=false">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/null/da1629cb-6f8b-41d2-b9a1-6087e8061b08._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/null/da1629cb-6f8b-41d2-b9a1-6087e8061b08._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/null/da1629cb-6f8b-41d2-b9a1-6087e8061b08._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/null/da1629cb-6f8b-41d2-b9a1-6087e8061b08._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>

          <div className="subscription-card-img">
            <a href="https://www.amazon.in/cbcc/marketpage?ref_=atv_me_pri_c_TrGy8k_uQW3qc_3_1&lop=false">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/null/e5423bdb-e10c-4fc6-82c0-7df0e029f9dd._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/null/e5423bdb-e10c-4fc6-82c0-7df0e029f9dd._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/null/e5423bdb-e10c-4fc6-82c0-7df0e029f9dd._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/null/e5423bdb-e10c-4fc6-82c0-7df0e029f9dd._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="subscription-benifits-cards-container">
        <h3 style={{ color: "white", padding: "0 30px", margin: "0px" }}>
          Prime Music benefits
        </h3>
        <div className="carousel-main-subs">
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/music/prime?ref_=atv_me_pri_c_w8D4oi_53bw1p_4_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/null/95c31d09-41f8-49a9-8e9d-c3964ffeab6e._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/null/95c31d09-41f8-49a9-8e9d-c3964ffeab6e._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/null/95c31d09-41f8-49a9-8e9d-c3964ffeab6e._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/null/95c31d09-41f8-49a9-8e9d-c3964ffeab6e._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/music/prime?ref_=atv_me_pri_c_w8D4oi_53bw1p_4_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_2/f097d2db-64c6-446a-a69f-c78ae8a3190a._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_2/f097d2db-64c6-446a-a69f-c78ae8a3190a._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_2/f097d2db-64c6-446a-a69f-c78ae8a3190a._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_2/f097d2db-64c6-446a-a69f-c78ae8a3190a._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/music/prime?ref_=atv_me_pri_c_w8D4oi_53bw1p_4_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_3/456556cf-ff2a-4f80-a4b7-70240d074b9a._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_3/456556cf-ff2a-4f80-a4b7-70240d074b9a._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_3/456556cf-ff2a-4f80-a4b7-70240d074b9a._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_3/456556cf-ff2a-4f80-a4b7-70240d074b9a._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/music/prime?ref_=atv_me_pri_c_w8D4oi_53bw1p_4_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_4/4da2eaa8-dd75-4485-80c7-e508f44d6211._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_4/4da2eaa8-dd75-4485-80c7-e508f44d6211._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_4/4da2eaa8-dd75-4485-80c7-e508f44d6211._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_4/4da2eaa8-dd75-4485-80c7-e508f44d6211._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="subscription-benifits-cards-container">
        <h3 style={{ color: "white", padding: "0 30px", margin: "0px" }}>
          Prime Reading benefits
        </h3>
        <div className="carousel-main-subs">
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref_=atv_me_pri_c_I4GYjA_ZrGv4T_5_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_1/12c7b8bb-b446-4160-8020-d5ef40eb3645._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_1/12c7b8bb-b446-4160-8020-d5ef40eb3645._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_1/12c7b8bb-b446-4160-8020-d5ef40eb3645._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_1/12c7b8bb-b446-4160-8020-d5ef40eb3645._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref_=atv_me_pri_c_I4GYjA_ZrGv4T_5_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_2/337d9ff6-6665-4bb5-9733-c80cd972131e._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_2/337d9ff6-6665-4bb5-9733-c80cd972131e._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_2/337d9ff6-6665-4bb5-9733-c80cd972131e._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_2/337d9ff6-6665-4bb5-9733-c80cd972131e._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref_=atv_me_pri_c_I4GYjA_ZrGv4T_5_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_3/2220a41b-44a0-4d9a-8058-6b3f975dd395._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_3/2220a41b-44a0-4d9a-8058-6b3f975dd395._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_3/2220a41b-44a0-4d9a-8058-6b3f975dd395._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_3/2220a41b-44a0-4d9a-8058-6b3f975dd395._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="subscription-card-img">
            <a href="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref_=atv_me_pri_c_I4GYjA_ZrGv4T_5_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_4/920fb3b4-a443-4cba-8717-ea986e65a88d._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_4/920fb3b4-a443-4cba-8717-ea986e65a88d._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_4/920fb3b4-a443-4cba-8717-ea986e65a88d._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_4/920fb3b4-a443-4cba-8717-ea986e65a88d._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
