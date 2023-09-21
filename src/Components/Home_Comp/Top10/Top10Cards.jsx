import React from "react";

export const Top10Cards = () => {
    const thumbnailImages = [
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WheelOfTime_S2_NewEpisodeFridays/96a4efdc-aa46-4850-bba7-2346af384a2c._UR3840,1440_SX1440_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Neeyat/f5548907-54c5-4eb8-9442-c1b53c0165a5._UR3840,1440_SX1440_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_SPIDERMAN_ATSV_99/1bcfcb5b-6ae2-43c2-b099-a8446ea76236._UR3840,1440_SX1440_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_APDhillon_S1/54fce2b2-b57a-4f85-a0b7-0cc2758d7e4a._UR3840,1440_SX1440_FMwebp_.jpeg",
        // "",
        // Add other thumbnail URLs as needed
    ];
    return (
        <div style={{ color: "white" }}>
            {/* <span className="card-no">1</span> */}
            <span className="card-no-img">
                {thumbnailImages.map((item) => {
                    <li>
                        <button>
                            <div className="card-no" style={{ color: "white" }}>
                                1
                            </div>
                            <span>
                                <a href="">
                                    <img src={item} alt="" />
                                </a>
                            </span>
                        </button>
                    </li>;
                })}
                {/* <img
                    src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WheelOfTime_S2_NewEpisodeFridays/96a4efdc-aa46-4850-bba7-2346af384a2c._UR3840,1440_SX1440_FMwebp_.jpeg"
                    alt=""
                /> */}
            </span>
        </div>
    );
};
