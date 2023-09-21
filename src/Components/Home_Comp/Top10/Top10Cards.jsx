import React, { useEffect, useState } from "react";

export const Top10Cards = () => {
    const [myData, setMyData] = useState([]);
    const [count, setCount] = useState(1);

    const bearerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";
    const projectId = "zxke0qiu2960";
    const mysteryURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and": [{"keywords": "mystery"}, {"keywords": "thriller"}]}`;

    useEffect(() => {
        const url = "https://academics.newtonschool.co/api/v1/ott/show";

        const headers = {
            projectId: projectId,
            Authorization: `Bearer ${bearerToken}`,
        };

        fetch(url, { method: "GET", headers: headers })
            .then((response) => response.json())
            .then((exdata) => {
                const allData = exdata;
                console.log(allData);
                setMyData(exdata.data);
            });
    }, [projectId, bearerToken]);
    const thumbnailImages = [
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WheelOfTime_S2_NewEpisodeFridays/96a4efdc-aa46-4850-bba7-2346af384a2c._UR3840,1440_SX1440_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Neeyat/f5548907-54c5-4eb8-9442-c1b53c0165a5._UR3840,1440_SX1440_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_SPIDERMAN_ATSV_99/1bcfcb5b-6ae2-43c2-b099-a8446ea76236._UR3840,1440_SX1440_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_APDhillon_S1/54fce2b2-b57a-4f85-a0b7-0cc2758d7e4a._UR3840,1440_SX1440_FMwebp_.jpeg",
    ];
    return (
        <div className="carousel-main">
            <span className="card-no-img">
                {myData.map((item, index) => {
                    while (index < 10) {
                        return (
                            <>
                                <li style={{ color: "black" }}>
                                    <button className="card-btn-container">
                                        <div
                                            className="card-no"
                                            style={{ color: "white" }}
                                        >
                                            <span
                                                className="no-span no-span-img"
                                                style={{
                                                    fontSize:
                                                        index === 9
                                                            ? "77px"
                                                            : "100px",
                                                }}
                                            >
                                                {index + 1}
                                            </span>
                                        </div>
                                        <span className="card-img-div">
                                            <img
                                                className="top10-card-img"
                                                src={item.thumbnail}
                                                alt={item.title}
                                            />
                                        </span>
                                    </button>
                                </li>
                            </>
                        );
                    }
                })}
            </span>
        </div>
    );
};
