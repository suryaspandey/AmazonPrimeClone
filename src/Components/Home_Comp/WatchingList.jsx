import React, { useEffect, useRef, useState } from "react";
import "./watchingList.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ListItem } from "../ListItems/ListItem";
import WatchCards from "./WatchCards";

export const WatchingList = () => {
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
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipeToSlide: true,
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

    // ------------------------

    const listRef = useRef();
    const handleClick = (direction) => {
        if (direction === "left") {
            listRef.current.style.transform = `transform:translateX(230px)`;
        }
    };
    return (
        <div className="list">
            <span className="listTitle">Continue Watching</span>
            <div className="wrapper">
                <AiOutlineLeft
                    className="slider-arrow left"
                    onClick={() => handleClick("left")}
                />
                <div className="container" ref={listRef} onWheel={handleSwipe}>
                    {/* {myData.map((dat) => {
                        return (
                            <ListItem key={dat.summary.id} actualData={dat} />
                        );
                    })} */}

                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                </div>
                <AiOutlineRight
                    className="slider-arrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
};
