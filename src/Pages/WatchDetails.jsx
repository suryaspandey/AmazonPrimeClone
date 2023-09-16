import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./watchdetils.css";
import { BiMoviePlay } from "react-icons/bi";

const WatchDetails = () => {
    let { id } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
                    {
                        headers: {
                            projectId: "zxke0qiu2960", // Replace with your actual projectId
                        },
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setDetails(data);
                } else {
                    console.log("Failed to fetch data:", response.statusText);
                }
            } catch (err) {
                console.log("Error fetching data: ", err);
            } finally {
                setLoading(false); // Set loading to false whether successful or not
            }
        };
        fetchData();
    }, [id]);

    // if (!details) {
    //     return <div>Loading...</div>; // Show a loading message while data is being fetched
    // }

    return (
        <div className="banner-watchDetails-container">
            {loading ? (
                <div style={{ color: "white", fontSize: "100px" }}>
                    Loading...
                </div>
            ) : details ? (
                <>
                    <div className="watchDetails-img">
                        <img src={details.data.thumbnail} alt={details.title} />
                    </div>

                    <div className="watchdetails-text-btn-content">
                        <div className="details-title-description">
                            <h1
                                className="show-title"
                                style={{ fontSize: "50px" }}
                            >
                                {details.data.title}
                            </h1>
                            <h3 className="show-description">
                                {details.data.description}
                            </h3>

                            <div className="imdb-details">
                                <span className="imdb-rating">IMDb 8.5</span>
                                <span className="show-duration">
                                    1 hr 30 min
                                </span>
                                <span className="imdb-year">2020</span>
                            </div>
                            <div className="genre">
                                <ul style={{ color: "white" }}>
                                    {details.data.keywords.map(
                                        (item, index) => {
                                            return (
                                                <li key={index}>
                                                    <span>
                                                        <a
                                                            href=""
                                                            style={{
                                                                color: "white",
                                                            }}
                                                        >
                                                            {item
                                                                .charAt(0)
                                                                .toUpperCase() +
                                                                item.slice(1)}
                                                        </a>
                                                    </span>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                            <div
                                className="included-with-prime-img-txt"
                                // className="included-with-prime-header blue-tick-text"
                            >
                                <img
                                    className="blue-tick-img"
                                    src="/prime-blue-tick.png"
                                    alt=""
                                />
                                <h5
                                    style={{
                                        color: "white",
                                        margin: "8px",
                                    }}
                                >
                                    Included with prime
                                </h5>
                            </div>
                        </div>
                        <div className="details-btns-container">
                            <span className="home-play-btn-container-new ">
                                <img
                                    className="details-play-btn"
                                    src="/play-btn.PNG"
                                    alt="play button"
                                    width={275}
                                />
                            </span>
                            <span style={{ color: "white" }}>Play</span>
                            <span>
                                <div className="more-purchase-options">
                                    <button className="more-purchase-options-btn">
                                        More Purchase Options
                                    </button>
                                </div>
                            </span>
                            <span className="home-play-btn-container-new trailer-span">
                                {/* <img
                                    className="trailer-img"
                                    src="/trailer1.png"
                                    alt="play button"
                                    width={275}
                                /> */}
                                <BiMoviePlay className="trailer-img" />
                            </span>
                        </div>
                    </div>
                </>
            ) : (
                <div style={{ color: "white", fontSize: "100px" }}>
                    Failed to load details.
                </div>
            )}
        </div>
    );
};

export default WatchDetails;
