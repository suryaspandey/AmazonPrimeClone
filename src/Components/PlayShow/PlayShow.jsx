import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlayShow = () => {
    let { id } = useParams();
    const [details, setDetails] = useState(null);
    console.log("PlyShow id:", id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://academics.newtonschool.co/api/v1/ott/show/${id}`,

                    {
                        headers: {
                            projectId: "zxke0qiu2960",
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
                console.log("Failed to fetch data:", response.statusText);
            }
            // finally {
            // }
        };
        fetchData();
    }, [id]);

    if (!details) {
        return <div>Loading...</div>; // Show a loading message while data is being fetched
    }

    return (
        <div style={{ color: "white" }}>
            <h1>{id}</h1>
            <h1>{details.data.title}</h1>
            {/* <video className="playShowVideoURL" src="{video_url}"></video> */}
        </div>
    );
};
