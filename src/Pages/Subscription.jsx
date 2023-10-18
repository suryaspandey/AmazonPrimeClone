import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import "./subscription.css";
import { Link } from "react-router-dom";

const Subscription = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 415);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const mobile_carousel_imgs = [
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Jupiter23_PEA_SH_LiveNow/5b552d3c-ffd0-4d87-9a61-66b405698720._UR1920,1080_SX720_FMwebp_.jpeg%20720w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Jupiter23_PEA_SH_LiveNow/5b552d3c-ffd0-4d87-9a61-66b405698720._UR1920,1080_SX1080_FMwebp_.jpeg%201080w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Jupiter23_PEA_SH_LiveNow/5b552d3c-ffd0-4d87-9a61-66b405698720._UR1920,1080_SX1440_FMwebp_.jpeg%201440w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Jupiter23_PEA_SH_LiveNow/5b552d3c-ffd0-4d87-9a61-66b405698720._UR1920,1080_SX1920_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/null/c44f7ca1-9d41-4b18-8bc5-372335e1846a._UR1920,1080_SX720_FMjpg_.jpeg%20720w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/c44f7ca1-9d41-4b18-8bc5-372335e1846a._UR1920,1080_SX1080_FMjpg_.jpeg%201080w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/c44f7ca1-9d41-4b18-8bc5-372335e1846a._UR1920,1080_SX1440_FMjpg_.jpeg%201440w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/c44f7ca1-9d41-4b18-8bc5-372335e1846a._UR1920,1080_SX1920_FMjpg_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/3443ea67-27fe-4eca-87ab-6d800ebddf23._UR1920,1080_SX720_FMwebp_.jpeg%20720w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/3443ea67-27fe-4eca-87ab-6d800ebddf23._UR1920,1080_SX1080_FMwebp_.jpeg%201080w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/3443ea67-27fe-4eca-87ab-6d800ebddf23._UR1920,1080_SX1440_FMwebp_.jpeg%201440w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/3443ea67-27fe-4eca-87ab-6d800ebddf23._UR1920,1080_SX1920_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/36ceab13-5581-4897-a5a8-d77bd8f8e9b6._UR1920,1080_SX720_FMwebp_.jpeg%20720w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/36ceab13-5581-4897-a5a8-d77bd8f8e9b6._UR1920,1080_SX1080_FMwebp_.jpeg%201080w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/36ceab13-5581-4897-a5a8-d77bd8f8e9b6._UR1920,1080_SX1440_FMwebp_.jpeg%201440w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/36ceab13-5581-4897-a5a8-d77bd8f8e9b6._UR1920,1080_SX1920_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/null/dc42f098-6bba-4f64-b066-fe642d2b2dbd._UR1920,1080_SX720_FMwebp_.jpeg%20720w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/dc42f098-6bba-4f64-b066-fe642d2b2dbd._UR1920,1080_SX1080_FMwebp_.jpeg%201080w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/dc42f098-6bba-4f64-b066-fe642d2b2dbd._UR1920,1080_SX1440_FMwebp_.jpeg%201440w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/dc42f098-6bba-4f64-b066-fe642d2b2dbd._UR1920,1080_SX1920_FMwebp_.jpeg",
  ];
  return (
    <>
      <div className="subscription-cards-container">
        <div className="subscription-carousel">
          <Carousel
            arrows
            // autoplay
          >
            <div className="subscription-card">
              <Link to="https://www.amazon.in/b/?_encoding=UTF8&node=90130123031&ref_=atv_me_pri_c_eiVJLU_zMbofx_1_1">
                <img
                  className="subscription-carousel-img"
                  src={
                    isMobile
                      ? mobile_carousel_imgs[0]
                      : "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Teaser1_2/J23_T2_PC_Rec_Header_V2.jpg"
                  }
                  alt=""
                />
              </Link>
              {!isMobile && (
                <div className="subscription-btn">
                  <Link to="https://www.amazon.in/b/?_encoding=UTF8&node=90130123031&ref_=atv_me_pri_c_eiVJLU_zMbofx_1_1">
                    <button className="subscription-more-details-btn">
                      More Details
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="subscription-card">
              <Link to="https://www.amazon.in/b/?node=12627912031&ref=Shipping_PV_Dashborad&ref_=atv_me_pri_c_eiVJLU_JadKnV_1_2">
                <img
                  className="subscription-carousel-img"
                  src={
                    isMobile
                      ? mobile_carousel_imgs[1]
                      : "https://m.media-amazon.com/images/S/sonata-images-prod/null/657d45e1-ef69-4223-9d5d-b36be1143ae2._UR3840,1440_SX1440_FMwebp_.jpeg%201440w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/657d45e1-ef69-4223-9d5d-b36be1143ae2._UR3840,1440_SX2160_FMwebp_.jpeg%202160w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/657d45e1-ef69-4223-9d5d-b36be1143ae2._UR3840,1440_SX2880_FMwebp_.jpeg%202880w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/657d45e1-ef69-4223-9d5d-b36be1143ae2._UR3840,1440_SX3840_FMwebp_.jpeg"
                  }
                  alt=""
                />
              </Link>
              {!isMobile && (
                <>
                  <div
                    className="subsc-banner-txt-img"
                    style={{
                      position: "absolute",
                      top: "24%",
                      left: "5%",
                    }}
                  >
                    <img
                      src="https://m.media-amazon.com/images/S/sonata-images-prod/null/909afa6f-6cd2-4bd5-bcfa-3172c1a85879._AC_SX1000_FMpng_.png,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/909afa6f-6cd2-4bd5-bcfa-3172c1a85879._AC_SX1500_FMpng_.png%201.5x,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/909afa6f-6cd2-4bd5-bcfa-3172c1a85879._AC_SX2000_FMpng_.png"
                      style={{ maxWidth: "100%", width: "200px" }}
                      alt="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/f803d866-7f27-460e-a60f-dfa0bd81d943._AC_SX1000_FMpng_.png,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/f803d866-7f27-460e-a60f-dfa0bd81d943._AC_SX1500_FMpng_.png%201.5x,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/f803d866-7f27-460e-a60f-dfa0bd81d943._AC_SX2000_FMpng_.png"
                    />
                  </div>

                  <div className="subscription-btn">
                    <Link to="https://www.amazon.in/b/?node=12627912031&ref=Shipping_PV_Dashborad&ref_=atv_me_pri_c_eiVJLU_JadKnV_1_2">
                      <button className="subscription-more-details-btn">
                        More Details
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>

            <div className="subscription-card">
              <Link to="https://www.amazon.in/music/prime?ref_=atv_me_pri_c_eiVJLU_BwAwhP_1_3">
                <img
                  className="subscription-carousel-img"
                  src={
                    isMobile
                      ? mobile_carousel_imgs[2]
                      : "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/189fa490-d59e-4c11-9dc8-194ecb35b140._UR3840,1440_SX1440_FMwebp_.jpeg%201440w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/189fa490-d59e-4c11-9dc8-194ecb35b140._UR3840,1440_SX2160_FMwebp_.jpeg%202160w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/189fa490-d59e-4c11-9dc8-194ecb35b140._UR3840,1440_SX2880_FMwebp_.jpeg%202880w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/189fa490-d59e-4c11-9dc8-194ecb35b140._UR3840,1440_SX3840_FMwebp_.jpeg"
                  }
                  alt=""
                />
              </Link>
              {!isMobile && (
                <>
                  <div
                    className="subsc-banner-txt-img"
                    style={{
                      position: "absolute",
                      top: "24%",
                      left: "5%",
                    }}
                  >
                    <img
                      src={
                        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/f803d866-7f27-460e-a60f-dfa0bd81d943._AC_SX1000_FMpng_.png,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/f803d866-7f27-460e-a60f-dfa0bd81d943._AC_SX1500_FMpng_.png%201.5x,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PrimeMusic_CleanSlate/f803d866-7f27-460e-a60f-dfa0bd81d943._AC_SX2000_FMpng_.png"
                      }
                      style={{ maxWidth: "100%", width: "200px" }}
                      alt=""
                    />
                  </div>

                  <div className="subscription-btn">
                    <Link to="https://www.amazon.in/music/prime?ref_=atv_me_pri_c_eiVJLU_BwAwhP_1_3">
                      <button className="subscription-more-details-btn">
                        More Details
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>

            <div className="subscription-card">
              <Link to="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref_=atv_me_pri_c_eiVJLU_t2438T_1_4">
                <img
                  className="subscription-carousel-img"
                  src={
                    isMobile
                      ? mobile_carousel_imgs[3]
                      : "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/deabc131-9a19-48b9-a786-ffab82f78f8b._UR3840,1440_SX1440_FMjpg_.jpeg%201440w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/deabc131-9a19-48b9-a786-ffab82f78f8b._UR3840,1440_SX2160_FMjpg_.jpeg%202160w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/deabc131-9a19-48b9-a786-ffab82f78f8b._UR3840,1440_SX2880_FMjpg_.jpeg%202880w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/deabc131-9a19-48b9-a786-ffab82f78f8b._UR3840,1440_SX3840_FMjpg_.jpeg"
                  }
                  alt=""
                />
              </Link>
              {!isMobile && (
                <>
                  <div
                    className="subsc-banner-txt-img"
                    style={{
                      position: "absolute",
                      top: "24%",
                      left: "5%",
                    }}
                  >
                    <img
                      src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/d60ec982-9673-4d35-b4db-9ebd015186cf._AC_SX1000_FMpng_.png,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/d60ec982-9673-4d35-b4db-9ebd015186cf._AC_SX1500_FMpng_.png%201.5x,%20https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ShippingCleanSlate/d60ec982-9673-4d35-b4db-9ebd015186cf._AC_SX2000_FMpng_.png"
                      style={{ maxWidth: "100%", width: "200px" }}
                      alt="https://m.media-amazon.com/images/S/sonata-images-prod/null/d3ed9ad3-4d03-402d-9d35-2b5320fdecd1._AC_SX1000_FMpng_.png,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/d3ed9ad3-4d03-402d-9d35-2b5320fdecd1._AC_SX1500_FMpng_.png%201.5x,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/d3ed9ad3-4d03-402d-9d35-2b5320fdecd1._AC_SX2000_FMpng_.png"
                    />
                  </div>

                  <div className="subscription-btn">
                    <Link to="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref_=atv_me_pri_c_eiVJLU_t2438T_1_4">
                      <button className="subscription-more-details-btn">
                        More Details
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>

            <div className="subscription-card">
              <Link to="https://www.amazon.in/cbcc/marketpage?ref_=atv_me_pri_c_eiVJLU_76bcn7_1_5&lop=false">
                <img
                  className="subscription-carousel-img"
                  src={
                    isMobile
                      ? mobile_carousel_imgs[4]
                      : "https://m.media-amazon.com/images/S/sonata-images-prod/null/c2b1c82c-cfc0-493f-9898-84750c69cf8d._UR3840,1440_SX1440_FMjpg_.jpeg%201440w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/c2b1c82c-cfc0-493f-9898-84750c69cf8d._UR3840,1440_SX2160_FMjpg_.jpeg%202160w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/c2b1c82c-cfc0-493f-9898-84750c69cf8d._UR3840,1440_SX2880_FMjpg_.jpeg%202880w,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/c2b1c82c-cfc0-493f-9898-84750c69cf8d._UR3840,1440_SX3840_FMjpg_.jpeg"
                  }
                  alt=""
                />
              </Link>
              {!isMobile && (
                <>
                  <div
                    className="subsc-banner-txt-img"
                    style={{
                      position: "absolute",
                      top: "24%",
                      left: "5%",
                    }}
                  >
                    <img
                      style={{ maxWidth: "100%", width: "200px" }}
                      src="https://m.media-amazon.com/images/S/sonata-images-prod/null/d3ed9ad3-4d03-402d-9d35-2b5320fdecd1._AC_SX1000_FMpng_.png,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/d3ed9ad3-4d03-402d-9d35-2b5320fdecd1._AC_SX1500_FMpng_.png%201.5x,%20https://m.media-amazon.com/images/S/sonata-images-prod/null/d3ed9ad3-4d03-402d-9d35-2b5320fdecd1._AC_SX2000_FMpng_.png"
                    />
                  </div>

                  <div className="subscription-btn">
                    <Link to="https://www.amazon.in/cbcc/marketpage?ref_=atv_me_pri_c_eiVJLU_76bcn7_1_5&lop=false">
                      <button className="subscription-more-details-btn">
                        More Details
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </Carousel>
          <div className="subsription-carousel-text"></div>
        </div>
      </div>
      <div className="subscription-benifits-cards-container">
        <h3 style={{ color: "white", padding: "20px 30px", margin: "0px" }}>
          Prime Shipping benefits
        </h3>
        <div className="carousel-main-subs">
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/b/?node=12627912031&ref=Shipping_PV_Dashborad&ref_=atv_me_pri_c_GjNWfd_qiGCL6_2_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/twin_carousel_shipping_1/96321b89-0cca-428e-84fe-589ba3c103b7._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/b/?node=12627912031&ref=Shipping_PV_Dashborad&ref_=atv_me_pri_c_GjNWfd_slAaBj_2_2">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_2/feb41b16-8cb7-4aa1-9821-d7ae8635917c._UR1920,1080_SX360_FMwebp_.jpeg%20360w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_2/feb41b16-8cb7-4aa1-9821-d7ae8635917c._UR1920,1080_SX480_FMwebp_.jpeg%20480w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_2/feb41b16-8cb7-4aa1-9821-d7ae8635917c._UR1920,1080_SX720_FMwebp_.jpeg%20720w,%20https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_2/feb41b16-8cb7-4aa1-9821-d7ae8635917c._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/b/?node=12627912031&ref=Shipping_PV_Dashborad&ref_=atv_me_pri_c_GjNWfd_slAaBj_2_2">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_3/029e7d14-e8d0-4128-bbc3-5fea5531d98e._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_3/029e7d14-e8d0-4128-bbc3-5fea5531d98e._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_3/029e7d14-e8d0-4128-bbc3-5fea5531d98e._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PVIN_twin_carousel_shipping_3/029e7d14-e8d0-4128-bbc3-5fea5531d98e._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="subscription-benifits-cards-container">
        <h3 style={{ color: "white", padding: "20px 30px", margin: "0px" }}>
          Amazon Pay ICICI card benefits
        </h3>
        <div className="carousel-main-subs">
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/cbcc/marketpage?ref_=atv_me_pri_c_TrGy8k_uQW3qc_3_1&lop=false">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/null/2bac4c2d-35e5-4338-97c3-af90aa345d33._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/null/2bac4c2d-35e5-4338-97c3-af90aa345d33._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/null/2bac4c2d-35e5-4338-97c3-af90aa345d33._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/null/2bac4c2d-35e5-4338-97c3-af90aa345d33._UR1920,1080_SX1080_FMwebp_.jpeg "
                alt=""
              />
            </Link>
          </div>
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/cbcc/marketpage?ref_=atv_me_pri_c_TrGy8k_uQW3qc_3_1&lop=false">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/null/bcb92702-13f3-42cb-9908-8fb24daa49bb._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/null/bcb92702-13f3-42cb-9908-8fb24daa49bb._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/null/bcb92702-13f3-42cb-9908-8fb24daa49bb._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/null/bcb92702-13f3-42cb-9908-8fb24daa49bb._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/cbcc/marketpage?ref_=atv_me_pri_c_TrGy8k_uQW3qc_3_1&lop=false">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/null/da1629cb-6f8b-41d2-b9a1-6087e8061b08._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/null/da1629cb-6f8b-41d2-b9a1-6087e8061b08._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/null/da1629cb-6f8b-41d2-b9a1-6087e8061b08._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/null/da1629cb-6f8b-41d2-b9a1-6087e8061b08._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>

          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/cbcc/marketpage?ref_=atv_me_pri_c_TrGy8k_uQW3qc_3_1&lop=false">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/null/e5423bdb-e10c-4fc6-82c0-7df0e029f9dd._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/null/e5423bdb-e10c-4fc6-82c0-7df0e029f9dd._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/null/e5423bdb-e10c-4fc6-82c0-7df0e029f9dd._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/null/e5423bdb-e10c-4fc6-82c0-7df0e029f9dd._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="subscription-benifits-cards-container">
        <h3 style={{ color: "white", padding: "20px 30px", margin: "0px" }}>
          Prime Music benefits
        </h3>
        <div className="carousel-main-subs">
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/music/prime?ref_=atv_me_pri_c_w8D4oi_53bw1p_4_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/null/95c31d09-41f8-49a9-8e9d-c3964ffeab6e._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/null/95c31d09-41f8-49a9-8e9d-c3964ffeab6e._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/null/95c31d09-41f8-49a9-8e9d-c3964ffeab6e._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/null/95c31d09-41f8-49a9-8e9d-c3964ffeab6e._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/music/prime?ref_=atv_me_pri_c_w8D4oi_53bw1p_4_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_2/f097d2db-64c6-446a-a69f-c78ae8a3190a._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_2/f097d2db-64c6-446a-a69f-c78ae8a3190a._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_2/f097d2db-64c6-446a-a69f-c78ae8a3190a._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_2/f097d2db-64c6-446a-a69f-c78ae8a3190a._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/music/prime?ref_=atv_me_pri_c_w8D4oi_53bw1p_4_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_3/456556cf-ff2a-4f80-a4b7-70240d074b9a._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_3/456556cf-ff2a-4f80-a4b7-70240d074b9a._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_3/456556cf-ff2a-4f80-a4b7-70240d074b9a._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_3/456556cf-ff2a-4f80-a4b7-70240d074b9a._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/music/prime?ref_=atv_me_pri_c_w8D4oi_53bw1p_4_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_4/4da2eaa8-dd75-4485-80c7-e508f44d6211._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_4/4da2eaa8-dd75-4485-80c7-e508f44d6211._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_4/4da2eaa8-dd75-4485-80c7-e508f44d6211._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_music_twin_4/4da2eaa8-dd75-4485-80c7-e508f44d6211._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="subscription-benifits-cards-container">
        <h3 style={{ color: "white", padding: "20px 30px", margin: "0px" }}>
          Prime Reading benefits
        </h3>
        <div className="carousel-main-subs">
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref_=atv_me_pri_c_I4GYjA_ZrGv4T_5_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_1/12c7b8bb-b446-4160-8020-d5ef40eb3645._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_1/12c7b8bb-b446-4160-8020-d5ef40eb3645._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_1/12c7b8bb-b446-4160-8020-d5ef40eb3645._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_1/12c7b8bb-b446-4160-8020-d5ef40eb3645._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref_=atv_me_pri_c_I4GYjA_ZrGv4T_5_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_2/337d9ff6-6665-4bb5-9733-c80cd972131e._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_2/337d9ff6-6665-4bb5-9733-c80cd972131e._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_2/337d9ff6-6665-4bb5-9733-c80cd972131e._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_2/337d9ff6-6665-4bb5-9733-c80cd972131e._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref_=atv_me_pri_c_I4GYjA_ZrGv4T_5_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_3/2220a41b-44a0-4d9a-8058-6b3f975dd395._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_3/2220a41b-44a0-4d9a-8058-6b3f975dd395._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_3/2220a41b-44a0-4d9a-8058-6b3f975dd395._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_3/2220a41b-44a0-4d9a-8058-6b3f975dd395._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
          <div className="subscription-card-img">
            <Link to="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref_=atv_me_pri_c_I4GYjA_ZrGv4T_5_1">
              <img
                className="subscription-prime-benefits-img"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_4/920fb3b4-a443-4cba-8717-ea986e65a88d._UR1920,1080_SX360_FMwebp_.jpeg 360w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_4/920fb3b4-a443-4cba-8717-ea986e65a88d._UR1920,1080_SX480_FMwebp_.jpeg 480w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_4/920fb3b4-a443-4cba-8717-ea986e65a88d._UR1920,1080_SX720_FMwebp_.jpeg 720w, https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Signpost_books_twin_4/920fb3b4-a443-4cba-8717-ea986e65a88d._UR1920,1080_SX1080_FMwebp_.jpeg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
