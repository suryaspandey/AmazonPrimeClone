
import React from "react";
import { GrNext } from "react-icons/gr";

export const CustomNextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <GrNext />
        </div>
    );
};
