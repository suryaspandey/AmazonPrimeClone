import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import "./recommendedMovies.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import { useApi } from "../APIContext";

import { useApi } from "../../APIContext";

const ComedyMovies = () => {
    const navigate = useNavigate();
    const [myData, setMyData] = useState([]);
    const { setApi } = useApi();

    const bearerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";
    const projectId = "zxke0qiu2960";
    const comedyMoviesURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and": [{"keywords": "comedy"},{"type":"movie"}]}`;
    // const comedyThrillerMOvieAPI = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and": [{"keywords": "comedy"},{"type":"movie"},{"keywords":"thriller"}]}`;
    useEffect(() => {
        const headers = {
            projectId: projectId,
            Authorization: `Bearer ${bearerToken}`,
        };

        fetch(comedyMoviesURL, { method: "GET", headers: headers })
            .then((response) => response.json())
            .then((exdata) => {
                const allData = exdata;
                console.log(allData);
                setMyData(exdata.data);
            });
    }, [projectId, bearerToken]);

    const handleSeeMoreClick = () => {
        setApi(comedyMoviesURL);
        navigate("/CompleteShowList/ComedyMovies");
        console.log("comedyThrillerMOvieAPI", comedyMoviesURL);
    };

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
    return (
        <>
            <div className="cards-heaading">
                <h2
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <span
                        className="prime-text-heading"
                        style={{ marginRight: "8px" }}
                    >
                        Prime
                    </span>

                    <span className="card-indv-heading">Comedy Movies</span>
                    <span className="seeMore" onClick={handleSeeMoreClick}>
                        See More
                        <MdKeyboardArrowRight style={{ fontSize: "40px" }} />
                    </span>
                </h2>
            </div>
            <div className="carousel-main" style={{ display: "flex" }}>
                {myData.map((item) => {
                    return (
                        <WatchCards
                            key={item._id}
                            actualData={myData}
                            projectId={projectId}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ComedyMovies;
