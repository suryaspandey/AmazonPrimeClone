import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import "./recommendedMovies.css";

const RecommendedMovies = () => {
    const [myData, setMyData] = useState([]);

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "2cb17705eamshda6af13de6197b3p1ef79djsnd06313107b1b",
            "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
        },
    };

    const fetchData = async () => {
        try {
            const result = await fetch(
                "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
                options
            );

            const data = await result.json();
            console.log(data);
            setMyData(data.titles); // coming from api
            // console.log(data.titles);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                <h2>
                    <span className="prime-text" style={{ marginRight: "8px" }}>
                        Prime
                    </span>
                    <span className="card-indv-heading">
                        Recommended movies
                    </span>
                </h2>
            </div>
            <div className="carousel-main" style={{ display: "flex" }}>
                {/* <Carousel responsive={responsive} swipeable={true} draggable> */}

                {myData.map((dat) => {
                    return <WatchCards key={dat.summary.id} actualData={dat} />;
                })}
                {/* </Carousel> */}
            </div>
        </>
    );
};

export default RecommendedMovies;
