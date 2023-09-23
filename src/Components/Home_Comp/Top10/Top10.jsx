import React, { useState } from "react";
import Top10Video from "./Top10Video";
import "./top10.css";
import Top10Cards from "./Top10Cards";

export const Top10 = () => {
    // const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

    // const handleVideoChange = (index) => {
    //     setSelectedVideoIndex(index);
    // };
    return (
        <>
            <Top10Video
            // onVideoChange={setSelectedVideoIndex}
            />
            <Top10Cards
            // selectedVideoIndex={selectedVideoIndex}
            />
        </>
    );
};
