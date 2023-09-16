import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./watchdetils.css";

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
                            {/* IMDb 7.7
1 h 30 min
2020 */}
                            <div className="imdb-details">
                                <span className="imdb-rating">IMDb 8.5</span>
                                <span className="show-duration">
                                    1 hr 30 min
                                </span>
                                <span className="imdb-year">2020</span>
                            </div>
                            <div className="genre"></div>
                        </div>
                        <div className="details-btn"></div>
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
