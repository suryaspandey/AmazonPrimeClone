import React, { useEffect, useState } from "react";
import WatchCards from "../WatchCards";
import "../recommendedMovies.css";
import "react-multi-carousel/lib/styles.css";
import { useApi } from "../../../APIContext";
import { useNavigate } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";

const ActionAdventureTV = ({ heading }) => {
    const [myData, setMyData] = useState([]);
    const navigate = useNavigate();
    const { setApi } = useApi();

    console.log("heading: ", heading); // false

    const bearerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";
    const projectId = "zxke0qiu2960";
    const actionAdventureTVURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and":[{"keywords":"action"},{"type":"tv show"},{"keywords":"adventure"}]}`;

    useEffect(() => {
        const headers = {
            projectId: projectId,
            Authorization: `Bearer ${bearerToken}`,
        };

        fetch(actionAdventureTVURL, { method: "GET", headers: headers })
            .then((response) => response.json())
            .then((exdata) => {
                const allData = exdata;
                // console.log(allData);
                setMyData(exdata.data);
            });
    }, [projectId, bearerToken]);

    const handleSeeMoreClick = () => {
        setApi(actionAdventureTVURL);
        navigate("/CompleteShowList/ActionAdventureTVShows");
    };

    return (
        <>
            {!heading && ( //not to render heading in recommended section
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

                        <span className="card-indv-heading">
                            Action and adventure TV Shows
                        </span>
                        <span className="seeMore" onClick={handleSeeMoreClick}>
                            See More
                            <MdKeyboardArrowRight
                                style={{ fontSize: "40px" }}
                            />
                        </span>
                    </h2>
                </div>
            )}

            <div className="carousel-main" style={{ display: "flex" }}>
                {/* {myData.map((item) => {
                    return ( */}
                <WatchCards
                    // key={item._id}
                    actualData={myData}
                    projectId={projectId}
                />
                {/* );
                })} */}
            </div>
        </>
    );
};

export default ActionAdventureTV;
