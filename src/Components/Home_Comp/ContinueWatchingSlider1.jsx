import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevBtn } from "./CustomPrevBtn";
import { CustomNextBtn } from "./CustomNextBtn";

export const ContinueWatchingSlider1 = () => {
    const [myData, setMyData] = useState([]);
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "797696e645msh30cdd41c816aa0cp1a5632jsn85e75846747e",
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
            // console.log(data);
            setMyData(data.titles); // coming from api
            // console.log(data.titles);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    };
    return (
        <>
            <div
                // className="carousel-main"
                style={{
                    // display: "flex",
                    margin: "60px",
                }}
            >
                <Slider
                    prevArrow={<CustomPrevBtn />}
                    nextArrow={<CustomNextBtn />}
                    {...settings}
                >
                    {myData.map((dat) => {
                        return (
                            <WatchCards key={dat.summary.id} actualData={dat} />
                        );
                    })}
                </Slider>
            </div>
        </>
    );
};
