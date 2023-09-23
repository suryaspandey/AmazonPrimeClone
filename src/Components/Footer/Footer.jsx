import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <div className="emptypadding" style={{ paddingTop: "140px" }}></div>
            <div className="footer-container" style={{ padding: "24px" }}>
                <div className="footer-img">
                    <img
                        src="/Prime-Video-footer.png"
                        alt="Prime Video Footer"
                        width={102}
                        height={32}
                    />
                </div>

                <ul className="footer-ul">
                    <li className="footer-li footer-links">
                        <a href="">Terms and Privacy Notes</a>
                    </li>
                    <li className="footer-li footer-links">
                        <a href="">Send us Feedback</a>
                    </li>
                    <li className="footer-li footer-links">
                        <a href="">Help</a>
                    </li>
                    <li className="footer-li">
                        <a href="">
                            @1996-2023, created by{" "}
                            <span style={{ color: "#79bbf3" }}>
                                suryaspandey
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Footer;
