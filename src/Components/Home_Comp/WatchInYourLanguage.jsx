import React, { useEffect, useState } from "react";
import WatchCards1 from "./WatchCards1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WatchInYourLanguage = () => {
    const [mydata, setMyData] = useState([]);
    const bearerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";
    const projectId = "zxke0qiu2960";

    useEffect(() => {
        const url = "https://academics.newtonschool.co/api/v1/ott/show";
        const webSeriesurl = `https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "web series"}`;

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

    return (
        <div className="cards-main" style={{ display: "flex" }}>
            <WatchCards1
                // key={item._id}
                actualData={mydata}
                projectId={projectId}
            />
        </div>
    );
};
