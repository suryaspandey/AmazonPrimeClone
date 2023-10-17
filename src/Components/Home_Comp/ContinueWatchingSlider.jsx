import { useEffect, useState } from "react";
import WatchCards from "./WatchCards";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContinueWatchingSlider = () => {
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

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "797696e645msh30cdd41c816aa0cp1a5632jsn85e75846747e",
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

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <div onClick={onClick}>
        <FaArrowLeft style={{ color: "white" }} />
      </div>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <div onClick={onClick}>
        <FaArrowRight style={{ color: "white" }} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <>
      <h3 style={{ color: "white" }}>Continue watching</h3>
      <div
        className="carousel-main"
        style={{ display: "flex", margin: "60px" }}
      >
        {/* <button
                    className="carousel-button prev"
                    onClick={handlePrevSlide}
                    disabled={currentIndex === 0}
                >
                    <FaArrowLeft />
                </button> */}
        {/* <Carousel
                    renderArrowPrev={CustomLeftArrow}
                    renderArrowNext={CustomRightArrow}
                    responsive={responsive}
                    swipeable={true}
                    draggable
                    arrows
                > */}
        {/* <h1 style={{ color: "white" }}>Slider Component</h1> */}
        <Slider {...settings}>
          {/* {myData.map((dat) => {
                        return ( */}
          <WatchCards
            //  key={dat.summary.id}
            actualData={dat}
          />
          {/* );
                    })} */}
        </Slider>
        {/* </Carousel> */}
        {/* <button
                    className="carousel-button prev"
                    onClick={handleNextSlide}
                    disabled={currentIndex + slidesPerPage >= myData.length}
                >
                    <FaArrowRight />
                </button> */}
      </div>
    </>
  );
};

export default ContinueWatchingSlider;
