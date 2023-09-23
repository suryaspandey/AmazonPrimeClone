import React, { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevBtn } from "./CustomPrevBtn";
import { CustomNextBtn } from "./CustomNextBtn";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import Carousel from "react-slick-carousel";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

export const ContinueWatchingSlider1 = () => {
    // --------------------------------
    const [myData, setMyData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesPerPage = 5;

    const handleNextSlide = () => {
        if (currentIndex + slidesPerPage < myData.length) {
            setCurrentIndex(currentIndex + slidesPerPage);
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex - slidesPerPage >= 0) {
            setCurrentIndex(currentIndex - slidesPerPage);
        }
    };

    const handleSwipe = (event) => {
        if (event.deltaX > 0) {
            handlePrevSlide();
        } else {
            handleNextSlide();
        }
    };

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
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipeToSlide: true,
        // prevArrow: <CustomPrevBtn />,
        // nextArrow: <CustomNextBtn />,
        // draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <h3 style={{ color: "white" }}>Continue watching</h3>
            <div
                className="carousel-main"
                style={{
                    display: "flex",
                    // margin: "60px",
                    // position: "relative",
                }}
                // onWheel={handleSwipe}
            >
                {/* <button
                    className="carousel-button prev"
                    onClick={handlePrevSlide}
                    disabled={currentIndex === 0}
                    style={{
                        position: "absolute",
                        left: 0,
                        // top: "50%",
                        // transform: "translateY(-50%)",
                    }}
                >
                    <FaArrowLeft />
                </button> */}

                {/* <Slider
                    // <ScrollingCarousel 
                    // responsive
                    // dynamic
                    // leftArrow
                    // rightArrow
                    // useArrowKeys
                    // prevArrow={<CustomPrevBtn />}
                    // nextArrow={<CustomNextBtn />}
                    {...settings}
                > */}
                <Slider {...settings}>
                    {/* {myData
                        .map((dat) => {
                            return ( */}
                    <WatchCards
                        // key={dat.summary.id}
                        actualData={dat}
                    />
                    {/* );
                        })} */}
                </Slider>
                {/* <button
                    className="carousel-button prev"
                    onClick={handleNextSlide}
                    disabled={currentIndex + slidesPerPage >= myData.length}
                    style={{
                        position: "absolute",
                        right: 0,
                        
                    }}
                >
                    <FaArrowRight />
                </button> */}
            </div>
        </>
    );
};
