import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import "./recommendedMovies.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Carousel } from "react-responsive-carousel";

const RecommendedMovies = () => {
    const [myData, setMyData] = useState([]);

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
        console.log("recommended page");
        fetch(webSeriesurl, { method: "GET", headers: headers })
            .then((response) => response.json())
            .then((exdata) => {
                const allData = exdata;
                console.log(allData);
                setMyData(exdata.data);
            });
    }, [projectId, bearerToken]);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    // console.log("recommended movies comp");

    return (
        <>
            <div className="cards-heaading">
                <h2>
                    <span
                        className="prime-text-heading"
                        style={{ marginRight: "8px" }}
                    >
                        Prime
                    </span>
                    <span className="card-indv-heading">
                        Recommended movies
                    </span>
                </h2>
            </div>
            <div className="carousel-main" style={{ display: "flex" }}>
                <WatchCards actualData={myData} projectId={projectId} />
            </div>
        </>
    );
};

export default RecommendedMovies;
