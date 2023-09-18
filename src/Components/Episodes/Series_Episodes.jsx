import React, { useState } from "react";
import { GoDownload } from "react-icons/go";
import { Tooltip } from "antd";
import { BsPlayFill } from "react-icons/bs";
import { Episodes_details } from "./Episodes_details";

export const Series_Episodes = ({ imgdata }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <Episodes_details imgdata={imgdata} episodeNo={1} />
            <Episodes_details imgdata={imgdata} episodeNo={2} />
        </>
    );
};
