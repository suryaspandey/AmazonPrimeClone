import React from "react";
import { GrPrevious } from "react-icons/gr";

export const CustomPrevBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <GrPrevious style={{ color: "white" }} />
        </div>
    );
};
